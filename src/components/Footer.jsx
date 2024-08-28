import { Row, Col, Accordion } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
import footerlogo from "../assets/footerlogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <Row className="d-none d-md-flex">
          <Col md={2}>
            <p>TECHCAREER</p>
            <ul className="list-unstyled">
              <li>
                <a href="#">Hakkımızda</a>
              </li>
              <li>
                <a href="#">Etkinlikler</a>
              </li>
              <li>
                <a href="#">Şirketler İçin</a>
              </li>
              <li>
                <a href="#">Eğitmen Ol</a>
              </li>
              <li>
                <a href="#">İş Birliği</a>
              </li>
              <li>
                <a href="#">İletişim</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <p>BAŞVUR</p>
            <ul className="list-unstyled">
              <li>
                <a href="#">Bootcamp</a>
              </li>
              <li>
                <a href="#">Hackathon</a>
              </li>
              <li>
                <a href="#">Hiring Challenge</a>
              </li>
              <li>
                <a href="#">İş İlanları</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <p>SENİN İÇİN</p>
            <ul className="list-unstyled">
              <li>
                <a href="#">Komünite</a>
              </li>
              <li>
                <a href="#">TDC</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Podcast</a>
              </li>
              <li>
                <a href="#">Kariyer Rehberi </a>
              </li>
              <li>
                <a href="#">Teknik Sözlük</a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <p>VERİ POLİTİKAMIZ</p>
            <ul className="list-unstyled">
              <li>
                <a href="#">Aydınlatma Metni</a>
              </li>
              <li>
                <a href="#">Hizmet Sözleşmesi</a>
              </li>
              <li>
                <a href="#">Açık Rıza Metni</a>
              </li>
              <li>
                <a href="#">Çerez Politikası</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <ul>
              <li>
                <a href="/">
                  <img src={footerlogo} alt="footerlogo" />
                </a>
              </li>
              <li>
                <span className="techcareer-text">
                  Türkiye'nin teknoloji kariyeri platformu
                </span>
              </li>
              <li></li>
              <li>
                <p style={{ marginTop: "55px" }}>SOSYAL MEDYA</p>
              </li>
              <li>
                <ul className="social-media-icons">
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="text-center">
          <Accordion className="d-md-none">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="custom-accordion-button">
                TECHCAREER
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Hakkımızda</a>
                  </li>
                  <li>
                    <a href="#">Etkinlikler</a>
                  </li>
                  <li>
                    <a href="#">Şirketler İçin</a>
                  </li>
                  <li>
                    <a href="#">Eğitmen Ol</a>
                  </li>
                  <li>
                    <a href="#">İş Birliği</a>
                  </li>
                  <li>
                    <a href="#">İletişim</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header className="custom-accordion-button">
                BAŞVUR
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Bootcamp</a>
                  </li>
                  <li>
                    <a href="#">Hackathon</a>
                  </li>
                  <li>
                    <a href="#">Hiring Challenge</a>
                  </li>
                  <li>
                    <a href="#">İş İlanları</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header className="custom-accordion-button">
                SENİN İÇİN
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Komünite</a>
                  </li>
                  <li>
                    <a href="#">TDC</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Podcast</a>
                  </li>
                  <li>
                    <a href="#">Kariyer Rehberi </a>
                  </li>
                  <li>
                    <a href="#">Teknik Sözlük</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header className="custom-accordion-button">
                VERİ POLİTİKAMIZ
              </Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Aydınlatma Metni</a>
                  </li>
                  <li>
                    <a href="#">Hizmet Sözleşmesi</a>
                  </li>
                  <li>
                    <a href="#">Açık Rıza Metni</a>
                  </li>
                  <li>
                    <a href="#">Çerez Politikası</a>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Col md={4}>
              <ul>
                <li>
                  <a href="#">
                    <img
                      style={{ marginTop: "10px" }}
                      src={footerlogo}
                      alt="footerlogo"
                    />
                  </a>
                </li>
                <li>
                  <span className="techcareer-text">
                    Türkiye'nin teknoloji kariyeri platformu
                  </span>
                </li>
                <li></li>
                <li>
                  <p style={{ marginTop: "55px" }}>SOSYAL MEDYA</p>
                </li>
                <li>
                  <ul className="custom-social-media-icons">
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </Col>
          </Accordion>
        </div>
        <Row className="mt-4">
          <Col>
            <hr />
            <div className="copyright">
              <span>Tüm Hakları Saklıdır&emsp;&copy; Copyright 2024</span>
              &emsp;
              <a href="#">support@career.net</a>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;
