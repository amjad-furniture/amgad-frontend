import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Row sm={ 1 } md={ 2 } lg={ 4 } className="row-items">
          <Col className="footer-brand">
            <img
              src="/assets/images/Group (1).png"
              alt="logo"
              className="logo"
            />
            <p className="logo-text">
              امجاد لصالونات دمياط الكلاسيكية: فخامة الماضي وإبداع الحاضر
            </p>
          </Col>

          <Col className="footer-links">
            <h5>روابط مهمة</h5>
            <ul>
              <li><Link to="WhoWeAre">عن امجاد</Link></li>
              <li><Link to="Policy">سياسة الخصوصية</Link></li>
              <li><Link to="ContactUs">تواصل معنا</Link></li>
            </ul>
          </Col>

          <Col className="footer-about">
            <h5>من نحن</h5>
            <p>
              نحن في امجـــــــــــــاد نفخر بإرث
              طويل من صناعة الصالونات
              الكلاسيكية التي تعكس فن
              الأويمة الدمياطية.
            </p>
          </Col>

          <Col className="footer-social">
            <h5>سوشيال ميديا</h5>
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/profile.php?id=61568220981761&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noreferrer">
                  <img src="/assets/images/facebook.png" alt="facebook" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/amgad_furniture202?igsh=NTFscXZlZmpiMm82"
                  target="_blank"
                  rel="noreferrer">
                  <img src="/assets/images/instegram.png" alt="instegram" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@amgad_furniture0?_t=8rYes9Pa7w9&_r=1"
                  target="_blank"
                  rel="noreferrer">
                  <img src="/assets/images/3046120.png" alt="tiktok" />
                  <span>TikTok</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/amgad-furniture-37452433a/"
                  target="_blank"
                  rel="noreferrer">
                  <img src="/assets/images/linkedin.png" alt="linkedin" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </Col>

          <Col className="footer-contact">
            <h5>تواصل معنا</h5>
            <ul className="contact-info">
              <li>
                <img src="/assets/images/whatsapp-svgrepo-com (2).png" alt="whatsapp" />
                <span>201559007451 +</span>
              </li>
              <li>
                <img src="/assets/images/phone-svgrepo-com.png" alt="phone number" />
                <span>201559007451 +</span>
              </li>
              <li>
                <img src="/assets/images/mail-svgrepo-com.png" alt="mail" />
                <a href="https://www.amgadfurniture202@gmail.com" target="blank" style={ { color: "#000", textDecoration: "none", fontWeight: "bolder" } }>amgadfurniture202@gmail.com</a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="footer-bottom">
        <hr className="hr" />
        <p className="reserved-rights">
          الحقوق محفوظة | 2025 للاثاث الدمياطي الكلاسيكي
        </p>
      </div>
    </footer>
  );
}
export default Footer;