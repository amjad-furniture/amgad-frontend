import React, { useEffect, useState } from "react";
import "./CategoryDetails.scss";
import { useParams } from "react-router-dom";

function CategoryDetails() {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    async function getProductDetails() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.amgadfurniture.com/products/${id}/`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          }
        );
        const result = await response.json();
        if (response.ok) {
          setProductDetail(result.data);
          // Set the first image as the default main image
          if (result.data.images && result.data.images.length > 0) {
            setMainImage(result.data.images[0].image);
          }
          setLoading(false);
          // Add small delay before triggering animations
          setTimeout(() => setIsLoaded(true), 100);
        } else {
          setError("Failed to fetch product details");
          setLoading(false);
        }
      } catch (error) {
        setError("An error occurred while fetching data");
        setLoading(false);
      }
    }
    getProductDetails();
  }, [id]);

  if (loading) {
    return (
      <p
        style={ {
          textAlign: "center",
          fontSize: "30px",
          fontFamily: "Amiri",
        } }
      >
        جاري تحميل البيانات....
      </p>
    );
  }

  if (error) {
    return (
      <p
        className="text-danger"
        style={ {
          textAlign: "center",
          fontSize: "30px",
          fontFamily: "Amiri",
        } }
      >
        حدث خطأ أثناء تحميل البيانات
      </p>
    );
  }

  if (!productDetail) {
    return (
      <p
        style={ {
          textAlign: "center",
          fontSize: "30px",
          fontFamily: "Amiri",
        } }
      >
        لا يوجد منتجات لعرضها في الوقت الحالي
      </p>
    );
  }

  return (
    <div className="category-details">
      <div className="image-section">
        { mainImage && (
          <div className="main-image">
            <img
              src={ mainImage }
              alt="Main Product"
              style={ {
                objectFit: "contain",
                width: "100%",
                height: "100%",
                maxHeight: "500px"
              } }
            />
          </div>
        ) }
        { productDetail.images && productDetail.images.length > 0 && (
          <div className="thumbnails">
            { productDetail.images.map((image, index) => (
              <img
                key={ index }
                src={ image.image }
                alt={ `Thumbnail ${index + 1}` }
                onClick={ () => setMainImage(image.image) }
                className={ mainImage === image.image ? "active" : "" }
                style={ {
                  objectFit: "cover",
                  width: "100px",
                  height: "100px"
                } }
              />
            )) }
          </div>
        ) }

        {/* Add video button after thumbnails */ }
        { productDetail.product_video && (
          <button
            className="video-button"
            onClick={ () => setShowVideo(true) }
          >
            <i className="fas fa-play"></i>
            عرض الفيديو
          </button>
        ) }

        {/* Video Modal */ }
        { showVideo && productDetail.product_video && (
          <div className="video-modal">
            <div className="video-content">
              <button
                className="close-button"
                onClick={ () => setShowVideo(false) }
              >
                ×
              </button>
              <video
                controls
                autoPlay
                src={ productDetail.product_video }
                style={ {
                  maxWidth: "100%",
                  maxHeight: "90vh",
                  width: "auto",
                  height: "auto",
                  aspectRatio: "auto"
                } }
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ) }
      </div>
      <div>
        <div className={ `product-details ${isLoaded ? '' : 'fade-enter'}` }>
          <h1>{ productDetail.name }</h1>
          { productDetail.price ? (
            <p style={ { textAlign: "left", fontWeight: "bolder" } }>
              { productDetail.price } جنية
            </p>
          ) : null }
          <p>{ productDetail.description }</p>
        </div>
        <div
          className={ `product-category ${isLoaded ? '' : 'fade-enter'}` }
          style={ {
            backgroundColor: "#F5F5DC",
            fontWeight: "bolder",
            borderRadius: "50px",
            border: "1px solid lightgray",
            height: "45px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          } }
        >
          { productDetail.category && productDetail.category.icon && (
            <img
              src={ productDetail.category.icon }
              alt=""
              width={ "20px" }
              style={ { margin: "0px 10px 0px 10px" } }
            />
          ) }
          <p style={ { padding: "0px", textAlign: "center" } }>
            { productDetail.category
              ? productDetail.category.name
              : "No Category" }
          </p>
        </div>
        {/* Only show specifications section if there are specs to display */ }
        { [
          productDetail.color,
          productDetail.length_cm,
          productDetail.width_cm,
          productDetail.height_cm,
          productDetail.depth_cm,
          productDetail.stock,
          productDetail.country_of_origin,
          productDetail.wood_material,
          productDetail.fabric_material,
          productDetail.upholstery_material,
          productDetail.warranty_months,
        ].some(value => value) && (
            <div className={ `product-specifications ${isLoaded ? '' : 'fade-enter'}` }>
              <h3 style={ { marginTop: "30px" } }>المواصفات</h3>
              <ul>
                { [
                  { label: 'اللون', value: productDetail.color },
                  { label: 'الطول_سم', value: productDetail.length_cm },
                  { label: 'العرض_سم', value: productDetail.width_cm },
                  { label: 'الارتفاع_سم', value: productDetail.height_cm },
                  { label: 'العمق_سم', value: productDetail.depth_cm },
                  { label: 'المخزون', value: productDetail.stock },
                  { label: 'بلد_المنشأ', value: productDetail.country_of_origin },
                  { label: 'مادة الخشب', value: productDetail.wood_material },
                  { label: 'مادة القماش', value: productDetail.fabric_material },
                  { label: 'مادة التنجيد', value: productDetail.upholstery_material },
                  { label: 'مدة الضمان بالشهر', value: productDetail.warranty_months },
                ]
                  .filter(spec => spec.value)
                  .map((spec, index) => (
                    <li
                      key={ index }
                      className={ isLoaded ? '' : 'fade-enter' }
                      style={ { '--item-index': index } }
                    >
                      { spec.label } : { spec.value }
                    </li>
                  )) }
              </ul>
            </div>
          ) }
      </div>
    </div>
  );
}

export default CategoryDetails;