import { Button, Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Companies.css";
import icon3 from "../assets/icons/icon3.png";
import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import icon6 from "../assets/icons/icon6.png";
import icon7 from "../assets/icons/icon7.png";
import icon8 from "../assets/icons/icon8.png";
import icon9 from "../assets/icons/icon9.png";
import career1 from "../assets/careerimage/career1.png";
import career4 from "../assets/careerimage/career4.png";
import career7 from "../assets/careerimage/career7.png";
import career8 from "../assets/careerimage/career8.png";
import career9 from "../assets/careerimage/career9.png";
import career10 from "../assets/careerimage/career10.png";
import career11 from "../assets/careerimage/career11.png";
import "./Info.css";

function Companies() {
  return (
    <>
      {/* Header Section */}
      <div className="company-shell">
        <div className="company-link">
          <NavLink to="/" className="company-guide-tags">
            Anasayfa
          </NavLink>
          <span style={{ color: "#fff" }}>›</span>&emsp;
          <NavLink className="company-guide-tags">İşveren</NavLink>
        </div>
        <div className="company-header-container">
          <div className="text-center">
            <h1 className="company-header">
              Şirketiniz için en doğru
              <span className="highlight"> "Dijital Yetenek" </span>
              techcareer.net'te!
            </h1>
            <Button variant="success" className="company-header-button">
              Hemen Etkinlik Düzenle
            </Button>
          </div>
        </div>
      </div>

      {/* Form Section  */}
      <div className="company-form-shell">
        <div className="company-form-container">
          <Row>
            <div className="col-md-6 mb-3 mb-md-0">
              <h4>
                Hemen formu doldurun,
                <span className="highlight">
                  {" "}
                  şirketinizle iletişime geçelim!
                </span>
              </h4>
              <p className="company-form-text">
                İşe alım uzmanlarının %83’ü dijital yetenek ihtiyacı olan
                pozisyonları doldurmakta zorluk çekiyor. techcareer.net ile
                dijital yetenek arayışındaki zorlukları aşın!
              </p>
            </div>
            <div className="col-md-6">
              <Card className="company-input-card">
                <div className="text-center">
                  <label className="company-input-label">
                    <span className="highlight">1- </span> Adınız- Soyadınız*
                  </label>
                  <br />
                  <input
                    className="company-input"
                    type="text"
                    placeholder="Yanıtınızı buraya yazın..."
                  />
                  <br />
                  <Button variant="success" className="company-form-button">
                    Tamam
                  </Button>
                </div>
              </Card>
            </div>
          </Row>
        </div>
      </div>

      {/* techcareer.net Section  */}
      <div className="info-shell">
        <div className="tech-container" style={{ paddingTop: "50px" }}>
          <h2>
            <span className="highlight">techcareer.net</span> ile şirketinize
            dijital yetenekleri kazandırın!
          </h2>
          <h5 style={{ marginBottom: "50px" }}>
            Aradığınız dijital yetenekler için yarışmalar ve eğitimler
            düzenleyin, işe alacağınız kişilerin teknik yetkinliklerinden emin
            olun!
          </h5>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <img src={icon4} alt="icon4" className="info-icon" />
              <h2
                className="info-card-title"
                style={{ fontSize: "2.09rem", paddingBottom: "10px" }}
              >
                Bootcamp
              </h2>
              <p className="info" style={{ fontSize: "1rem" }}>
                Yazılım teknolojileri, veri bilimi, ürün yönetimi gibi bilişim
                alanındaki konularda düzenlenen ücretsiz bir öğrenme
                maratonudur. Bootcamp'in amacı katılımcıları güncel yazılım
                teknolojileri alanında sıfırdan eğitip, ilgilenilen alanda işe
                başlayabilecek bilgi ve donanım seviyesine eriştirmektir.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <img src={icon5} alt="icon5" className="info-icon" />
              <h2
                className="info-card-title"
                style={{ fontSize: "2.09rem", paddingBottom: "10px" }}
              >
                Hackathon
              </h2>
              <p className="info" style={{ fontSize: "1rem" }}>
                Teknolojinin yazılım teknolojileri, veri bilimi, ürün yönetimi,
                mobil uygulama, oyun geliştirme gibi alt dallarına ilgi
                duyanların katılıp, kendilerini kanıtladıkları ve ödüller
                kazanabildikleri yarışmalardır. Amacı; belirli zamanda yeni
                fikri/ürünü kodlara dökmek, jüri değerlendirmesini geçmek ve
                ödüle hak kazanmaktır.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <img src={icon6} alt="icon6" className="info-icon" />
              <h2
                className="info-card-title"
                style={{ fontSize: "2.09rem", paddingBottom: "10px" }}
              >
                Hiring Challenge
              </h2>
              <p className="info" style={{ fontSize: "1rem" }}>
                Şirketler tarafından belirlenen, Android, iOS ve Algoritma gibi
                problemleri belirli bir zaman aralığı içerisinde katılımcılar
                tarafından çözülmeye çalışıldığı yarışmalardır. Bu yarışmalarda
                katılımcılar hız, algoritma tasarımı, özgünlük, kod kalitesi
                gibi konularda puanlanır. İş fırsatları elde edilen
                yarışmalardır.
              </p>
            </div>
          </div>
          <h2 style={{ paddingTop: "50px" }}>
            Teknoloji Alanında Aradığınız En Doğru "Dijital Yetenek"
            <span className="highlight"> techcareer.net'te!</span>
          </h2>
          <h5 style={{ marginBottom: "50px" }}>
            En doğru çalışanı en kısa sürede bulmanız için, size yüksek kalitede
            hizmet sunuyoruz.
          </h5>
          <div className="company-card-container">
            <Card className="company-card">
              <Card.Img src={icon7} alt="icon7" />
              <Card.Body>
                <span className="company-card-text">
                  Uzmanlarımız ile talebinizi dinliyor ve size uygun
                  yönlendirmeler yapıyoruz.
                </span>
              </Card.Body>
            </Card>
            <Card className="company-card">
              <Card.Img src={icon8} alt="icon8" />
              <Card.Body>
                <span className="company-card-text">
                  Yarışmalar ve eğitimler için 360° pazarlama süreci
                  planlıyoruz.
                </span>
              </Card.Body>
            </Card>
            <Card className="company-card">
              <Card.Img src={icon3} alt="icon3" />
              <Card.Body>
                <span className="company-card-text">
                  Doğru hedef kitleyi belirlemenizde yardımcı oluyoruz.
                </span>
              </Card.Body>
            </Card>
            <Card className="company-card">
              <Card.Img src={icon9} alt="icon9" />
              <Card.Body>
                <span className="company-card-text">
                  Adayların mesleki yeterliliklerini ölçerek işe alacağınız
                  adayların başarı sıralamalarını paylaşıyoruz.
                </span>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* Statistics Section  */}
      <div className="stats-shell">
        <div className="stats-container">
          <h2 className="text-center" style={{ margin: "20px" }}>
            Rakamlarla<span className="highlight"> techcareer.net</span>
          </h2>
          <div className="stat-card-container">
            <Card className="stat-card">
              <h2 className="highlight">420K+</h2>
              <h3 className="stat-text">Trafik</h3>
            </Card>
            <Card className="stat-card">
              <h2 className="highlight">500+</h2>
              <h3 className="stat-text">Etkinlik</h3>
            </Card>
            <Card className="stat-card">
              <h2 className="highlight">160K+</h2>
              <h3 className="stat-text">Üye</h3>
            </Card>
            <Card className="stat-card">
              <h2 className="highlight">135+</h2>
              <h3 className="stat-text">Üniversite Kulübü İş Birliği</h3>
            </Card>
            <Card className="stat-card">
              <h2 className="highlight">8.5K+</h2>
              <h3 className="stat-text">Bootcamp Mezunu</h3>
            </Card>
          </div>
        </div>
      </div>

      {/* Digital Skills Sections  */}
      <div className="skill-shell">
        <div className="skill-container">
          <h2 className="text-center" style={{ marginBottom: "40px" }}>
            Bulabileceğiniz Bazı Dijital Yetenekler
          </h2>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Card className="skill-card">
                <Card.Img src={career7} alt="career7" />
                <Card.Body>
                  <h5>Veri Bilimi</h5>
                  <li className="skill-card-text">Veri Madenciliği Uzmanı</li>
                  <li className="skill-card-text">Veri Bilimci</li>
                  <li className="skill-card-text">Veri Merkezi Uzmanı</li>
                  <li className="skill-card-text">Veri Merkezi Mühendisi</li>
                  <li className="skill-card-text">Büyük Veri Mimarı</li>
                  <li className="skill-card-text">Büyük Veri Mühendisi</li>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="skill-card">
                <Card.Img src={career1} alt="career1" />
                <Card.Body>
                  <h5>Web Geliştirme</h5>
                  <li className="skill-card-text">Web Programlayıcı</li>
                  <li className="skill-card-text">
                    Kıdemli Front-End Geliştiricisi
                  </li>
                  <li className="skill-card-text">Yazılım Mühendisi</li>
                  <li className="skill-card-text">Web Arayüz Tasarımcısı</li>
                  <li className="skill-card-text">
                    Algoritma Geliştirme Uzmanı
                  </li>
                  <li className="skill-card-text">Yazılım Geliştirme Uzmanı</li>
                  <li className="skill-card-text">
                    Bilgisayar Programlayıcısı
                  </li>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="skill-card">
                <Card.Img src={career8} alt="career8" />
                <Card.Body>
                  <h5>App Geliştirme</h5>
                  <li className="skill-card-text">
                    Uygulama Geliştirme Uzmanı
                  </li>
                  <li className="skill-card-text">Mobil Teknoloji Uzmanı</li>
                  <li className="skill-card-text">iOS Geliştirici</li>
                  <li className="skill-card-text">Mobil İçerik Uzmanı</li>
                  <li className="skill-card-text">Mobil Uygulama Uzmanı</li>
                  <li className="skill-card-text">Mobil Yazılım Mühendisi</li>
                  <li className="skill-card-text">Android Geliştirici</li>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="skill-card">
                <Card.Img src={career4} alt="career4" />
                <Card.Body>
                  <h5>Ürün</h5>
                  <li className="skill-card-text">AR-GE Mühendisi</li>
                  <li className="skill-card-text">Sistem Analisti</li>
                  <li className="skill-card-text">BT Proje Yöneticisi</li>
                  <li className="skill-card-text">İş Analisti</li>
                  <li className="skill-card-text">İş Geliştirme Uzmanı</li>
                  <li className="skill-card-text">Ürün Mühendisi</li>
                  <li className="skill-card-text">Ürün Yöneticisi</li>
                  <li className="skill-card-text">Ürün Pazarlama Uzmanı</li>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="skill-card">
                <Card.Img src={career9} alt="career9" />
                <Card.Body>
                  <h5>Sistem</h5>
                  <li className="skill-card-text">
                    Bilgi Teknolojileri Uzmanı
                  </li>
                  <li className="skill-card-text">Kalite Sistem Mühendisi</li>
                  <li className="skill-card-text">DevOps Mühendisi</li>
                  <li className="skill-card-text">Siber Güvenlik Uzmanı</li>
                  <li className="skill-card-text">Veri Tabanı Yöneticisi</li>
                  <li className="skill-card-text">Sistem Analizi Uzmanı</li>
                  <li className="skill-card-text">Bulut Mühendisi</li>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <Card className="skill-card">
                <Card.Img src={career10} alt="career10" />
                <Card.Body>
                  <h5>Test</h5>
                  <li className="skill-card-text">Yazılım Destek Uzmanı</li>
                  <li className="skill-card-text">Sistem Test Mühendis </li>
                  <li className="skill-card-text">
                    Yazılım Test ve Kalite Uzmanı
                  </li>
                  <li className="skill-card-text">Yazılım Test Mühendisi</li>
                  <li className="skill-card-text" style={{ color: "#878787" }}>
                    ...ve daha yüzlercesi
                  </li>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Contact Section  */}

      <div className="cont-shell">
        <div className="text-center" style={{ color: "#fff" }}>
          <img src={career11} alt="career11" />
          <h4>Tüm sorularınız ve önerileriniz için bizi arayabilirsiniz.</h4>
          <p>
            <a href="mailto:hello@techcareer.net">hello@techcareer.net</a>
            <br />
            0216 468 76 00
          </p>
        </div>
      </div>
    </>
  );
}

export default Companies;
