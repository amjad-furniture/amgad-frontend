import React from "react";
import "./OurClients.scss";

function OurClients() {
  return (
    <div className="ourClientsContainer">
      <div className="hero-section">
        <div className="hero-content">
          <img
            src="/assets/images/usersIcon.svg"
            alt="our_clients"
            className="hero-icon"
          />
          <h1 className="hero-title">عملاؤنا</h1>
          <p className="hero-description">
            نفخر بخدمتنا لعملاء مميزين من مختلف البلدان، الذين اختاروا أمجاد
            لجودة الصالونات الكلاسيكية والتصاميم الفريدة التي نقدمها. نحن
            ملتزمون بتقديم قطع أثاث تعكس الرقي والفخامة، وتضيف لمسة من الأصالة لكل منزل.
          </p>
        </div>
      </div>

      <div className="experience-section">
        <div className="container">
          <h2 className="section-title">تجربتنا مع عملائنا في العراق</h2>
          <p className="section-description">
            من خلال شراكتنا المستمرة مع عملائنا في العراق، نجحنا في تلبية
            متطلباتهم الفريدة وتقديم تشكيلة من الصالونات الكلاسيكية التي تعكس
            التراث العربي الأصيل. نفتخر بعلاقاتنا الوطيدة معهم، ونتطلع إلى تعزيز هذه الشراكة
            بتقديم مزيد من الجودة والفخامة.
          </p>
        </div>
      </div>

      <div className="testimonials-section">
        <div className="container">
          <h2 className="section-title">آراء بعض عملائنا المميزين</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                كان اختيار أمجاد خيارًا مثاليًا. الصالونات رائعة وتعكس حرفية عالية،
                وجودة الخامات ممتازة.
              </p>
              <span className="testimonial-author">— أحمد، العراق</span>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                خدمة ممتازة وسرعة في التوصيل. تصميم الصالون أضاف لمسة راقية إلى منزلنا.
              </p>
              <span className="testimonial-author">— مريم، مصر</span>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                أثاث مميز وخامات فائقة الجودة. أشكركم على اهتمامكم بأدق التفاصيل.
              </p>
              <span className="testimonial-author">— سارة، السعودية</span>
            </div>
          </div>
        </div>
      </div>

      <div className="why-choose-us">
        <div className="container">
          <h2 className="section-title">لماذا يختارنا عملاؤنا؟</h2>
          <p className="section-description">
            نحن نمزج بين الحرفية التقليدية والإبداع الحديث لنقدم لك أفضل تصاميم
            الصالونات. نستخدم أجود أنواع الأخشاب والمواد الفاخرة التي تضمن لك
            تجربة فريدة ومظهرًا أنيقًا يدوم طويلًا.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <img src="/assets/images/Subtract.png" alt="Subtract" />
              <div className="feature-content">
                <h3>تصاميم كلاسيكية فريدة</h3>
                <p>تعكس الأصالة والجمال.</p>
              </div>
            </div>
            <div className="feature-card">
              <img src="/assets/images/Subtract.png" alt="Quality" />
              <div className="feature-content">
                <h3>جودة عالية</h3>
                <p>مواد فاخرة وحرفية متميزة</p>
              </div>
            </div>
            <div className="feature-card">
              <img src="/assets/images/Subtract.png" alt="Service" />
              <div className="feature-content">
                <h3>خدمة عملاء متميزة</h3>
                <p>دعم مستمر ومتابعة احترافية</p>
              </div>
            </div>
            <div className="feature-card">
              <img src="/assets/images/Subtract.png" alt="Delivery" />
              <div className="feature-content">
                <h3>توصيل سريع وآمن</h3>
                <p>خدمة شحن موثوقة لجميع المناطق</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
