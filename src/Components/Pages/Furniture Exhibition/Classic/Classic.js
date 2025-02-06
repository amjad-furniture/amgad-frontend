import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Classic.scss";
import { useNavigate } from "react-router-dom";

function Classic() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState({
    color: '',
    search: '',
    best_seller: '',
    order_by_price: ''
  });

  const navigate = useNavigate();

  const fetchProducts = async (filterParams) => {
    setLoading(true);
    try {
      const queryString = Object.entries(filterParams)
        .filter(([_, value]) => value !== '')
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join('&');

      const response = await axios.get(
        `https://api.amgadfurniture.com/products/?${queryString}`,
        {
          headers: {
            accept: "application/json",
          },
        }
      );

      if (response.data.status === "success") {
        const classicProducts = response.data.data.filter(
          (product) =>
            product.category &&
            (product.category.name === "كلاسيك" ||
              product.category.name === "classic")
        );
        setProducts(classicProducts);
        setSortedProducts(classicProducts);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setError(true);
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchProducts(filters);
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="classic">
      <div style={ { display: "flex", alignItems: "center" } }>
        <img
          src="/assets/images/gallery-round-svgrepo-com 1.png"
          alt="classic"
        />
        <p style={ { fontWeight: "bolder", margin: "0px 10px" } }>
          المعرض
          <span style={ { color: "lightgray", margin: "0px 5px" } }>
            / أثاث كلاسيك
          </span>
        </p>
      </div>

      <div className="filterContainer">
        <div className="filter-header">
          <div className="filter-title">
            <i className="fas fa-sliders-h"></i>
            <h2>تصفية المنتجات</h2>
          </div>
          { Object.values(filters).some(value => value !== '') && (
            <button
              className="clear-filters"
              onClick={ () => setFilters({
                color: '',
                search: '',
                best_seller: '',
                order_by_price: ''
              }) }
            >
              <i className="fas fa-times"></i>
              مسح الفلاتر
            </button>
          ) }
        </div>

        <div className="filter-body">
          <div className="filter-group search-group">
            <div className="input-with-icon">
              <i className="fas fa-search"></i>
              <input
                type="text"
                name="search"
                placeholder="ابحث عن منتج..."
                value={ filters.search }
                onChange={ handleFilterChange }
                className="filter-input"
              />
            </div>
          </div>

          <div className="filter-group">
            <div className="select-wrapper">
              <select
                name="color"
                value={ filters.color }
                onChange={ handleFilterChange }
                className="filter-select"
              >
                <option value="">جميع الألوان</option>
                <option value="أبيض">أبيض</option>
                <option value="بني">بني</option>
                <option value="أسود">أسود</option>
              </select>
              <i className="fas fa-palette select-icon"></i>
            </div>
          </div>

          <div className="filter-group checkbox-group">
            <label className="checkbox-container">
              <input
                type="checkbox"
                name="best_seller"
                checked={ filters.best_seller === 'true' }
                onChange={ (e) => {
                  setFilters(prev => ({
                    ...prev,
                    best_seller: e.target.checked ? 'true' : ''
                  }));
                } }
                className="filter-checkbox"
              />
              <span className="checkmark"></span>
              <span className="checkbox-label">الأكثر مبيعاً</span>
            </label>
          </div>

          <div className="filter-group">
            <div className="select-wrapper">
              <select
                name="order_by_price"
                value={ filters.order_by_price }
                onChange={ handleFilterChange }
                className="filter-select"
              >
                <option value="">الترتيب الافتراضي</option>
                <option value="min">السعر: من الأقل إلى الأعلى</option>
                <option value="max">السعر: من الأعلى إلى الأقل</option>
              </select>
              <i className="fas fa-sort-amount-down select-icon"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="products">
        { error ? (
          <p className="error-message">حدث خطأ أثناء تحميل البيانات...</p>
        ) : loading ? (
          <p className="loading-message">جاري تحميل البيانات....</p>
        ) : products.length === 0 ? (
          <p className="no-products-message">لا يوجد منتجات لعرضها في الوقت الحالي</p>
        ) : (
          <ul className="product-list">
            { sortedProducts.map((product) => (
              <li
                key={ product.id }
                className="product-item"
                onClick={ () => navigate(`/Classic/${product.id}`) }
                style={ { cursor: "pointer" } }
              >
                <div className="product-images">
                  <img
                    src={ product.images[0]?.image }
                    alt={ `Product ${product.name} image` }
                  />
                </div>
                <div className="detail">
                  <h3>{ product.name }</h3>
                  <p style={ { fontWeight: "bolder" } }>
                    السعر :{ " " }
                    <span style={ { fontWeight: "lighter", margin: "10px 5px 0px 0px" } }>
                      { product.price } جنية{ " " }
                    </span>
                  </p>
                </div>
              </li>
            )) }
          </ul>
        ) }
      </div>
    </div>
  );
}

export default Classic;