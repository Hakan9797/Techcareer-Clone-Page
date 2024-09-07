import CareerGuideData from "../data/CareerGuideData";
import "./CareerGuideList.css";
import { Accordion, Card, Col, Row } from "react-bootstrap";
import step from "../assets/careerimage/step.png";
import "./CareerGuide.css";
import { NavLink } from "react-router-dom";

const CareerCard = ({ image, title, positions }) => {
  return (
    <Card className="career-card">
      <Card.Img src={image} alt={title} />
      <Card.Body>
        <h3 className="career-title">{title}</h3>
        <ul className="position-list">
          {positions.split("\n").map((position, index) => (
            <li key={index}>
              <a className="positions">
                {position}
                <span
                  style={{
                    color: "#1d1d1d",
                    fontSize: "24px",
                    fontWeight: "500",
                    paddingLeft: "8px",
                  }}
                >
                  ›
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

function CareerGuideList() {
  return (
    <>
      {/* Header Section */}
      <div className="career-shell">
        <div className="career-link">
          <NavLink to="/" className="career-guide-tags">
            Anasayfa
          </NavLink>
          <span style={{ color: "#878787" }}>›</span>&emsp;
          <NavLink className="career-guide-tags">Kariyer Rehberi</NavLink>
        </div>
        <div className="career-container">
          <h4 className="section-header">
            Yeni teknoloji kariyerini seçmeye hazır mısın?
          </h4>
          <p className="section-info">
            İsimlerini sıkça duyduğun onlarca teknoloji pozisyonunu senin için
            bir araya getirdik! Kariyer Rehberi ile teknoloji pozisyonlarının ne
            iş yaptığını, öğrenme yolculuklarını ve tüm bilgilerini
            öğreneceksin.
          </p>
        </div>
      </div>
      {/* Card List Section */}
      <div className="career-list-shell">
        <div className="career-list-container">
          <h2 className="career-list-header">
            Kariyer Patikaları ve Pozisyonları
          </h2>
          <div className="text-center">
            <Row>
              {CareerGuideData.map((career) => (
                <Col
                  key={career.id}
                  md={4}
                  lg={3}
                  className="d-flex justify-content-center mb-4"
                >
                  <CareerCard
                    image={career.image}
                    title={career.title}
                    positions={career.positions}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
      {/* Career Step Section */}
      <div className="career-steps-shell">
        <div className="career-steps-container">
          <Row>
            <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
              <img src={step} alt="step-logo" className="step-image" />
            </div>
            <div className="col-12 col-md-9">
              <h2 className="career-steps-title">
                Kariyer Basamaklarını Tırmanmaya Başla
              </h2>
              <p className="career-steps-info">
                Kariyer Rehberi ile eşsiz bir kariyer rehberine sahip olacaksın.
                Öğrenmek istediğin teknoloji alanıyla ilgili kariyer fikirlerini
                bu alanda edinecek, kariyer basamaklarını hızla tırmanacaksın.
                <br />
                <br />
                Onlarca teknoloji pozisyonu hakkında bilgi bulacak, her pozisyon
                için gerekli olan eğitim ve becerileri öğreneceksin.
                İlgilendiğin teknoloji pozisyonunun iş tanımı nedir, ne iş
                yapar, nerelerde çalışır, nasıl olunur, neler öğrenilmesi
                gerekir, kariyer yolu nasıl seçilir gibi soruların cevaplarını
                Kariyer Rehberi ile bulacaksın.
                <br />
                <br />
                Kazanacağın kariyer fikirleri ile teknoloji alanında seçmek
                istediğin tüm pozisyonlar hakkında detaylı bilgi öğreneceksin.
                Kariyer basamaklarını tırmanmaya hazırsan hemen şimdi senin için
                en uygun kariyer patikasını seçmeye ve planlamaya başla!
              </p>
            </div>
          </Row>
        </div>
      </div>
      {/* Career Accordion Section  */}
      <div className="career-list-shell">
        <div className="career-list-container" style={{ padding: "5px" }}>
          <Accordion className="career-accordion mt-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Kariyer Rehberi Hakkında</Accordion.Header>
              <Accordion.Body>
                Sahip olduğun yetkinlikler ve eğitim seviyen doğrultusunda
                attığın tüm adımlar, kariyer basamaklarını oluşturuyor. Bu
                basamakları çıkarken sağlam adımlar atman ise oldukça önemli.
                Tatmin edici ve gelişmeye teşvik eden bir kariyer süreci, iş
                hayatındaki faaliyetlerini kolaylaştırıyor. Tam da bu noktada
                bir kariyer rehberi doğrultusunda hareket etmen gerekiyor.
                Teknolojinin bu denli geliştiği modern dünyada değişimlerden pek
                çok sektörün etkilenmesi dikkat çekiyor. Yazılım, dijital gibi
                başlıca sektörlerin yanı sıra pek çok alanda mesleğini icra
                edebilmen mümkün hale geliyor. Teknoloji merkezli sektörler,
                <strong> kariyer patikasında</strong> yürürken her daim bir adım
                ileri gitmene olanak sağlıyor. Yapman gereken ise; ilgi
                alanların ve yetkinliklerin doğrultusunda uygun adımlar atmak
                oluyor.
                <strong>Software developer</strong>, web developer, android
                developer gibi çeşitli meslek gruplarında yer almadan önce,
                ilgili meslekler hakkında bilgi sahibi olman gerekiyor. Yazılım
                dünyasına adım atmadan önce öğrenmen gereken tüm bilgiler
                yazının devamında yer alıyor.
                <br />
                <br />
                <h6>
                  <strong>Developer Nedir?</strong>
                </h6>
                <br />
                Öne çıkan sektörler arasında yer alan yazılım dünyasında çeşitli
                meslek kolları yer alıyor. Yazılım dünyasının popüler meslek
                kollarından biri de ‘’developer’’ yani uygulama geliştiricileri
                oluyor. Developerlar, mesleğini icra ettikleri iş alanlarında
                genellikle benzer amaçlar doğrultusunda çalışmalarını
                sürdürüyor. Yazılım sektöründe gelişme imkanı oldukça yüksek
                olan developerlar, şirketlerin dışarıya sunmak istedikleri
                projeleri hayata geçirme noktasında başrol oluyorlar.
                Bilgisayar, telefon, tablet gibi dijital aygıtların kapsamında
                uygulama ve yazılım sistemleri geliştiren developerlar, kaynak
                kodu oluşturarak yazılım programlarının çalışmasını sağlar.
                Developer olarak mesleğini icra eden kişiler kod yazımının yanı
                sıra çeşitli plan ve programlar yapıyor. Aynı zamanda analiz
                çıkarma ve tasarım planlama gibi çeşitli görev ve sorumlulukları
                bulunan uygulama geliştiricileri, farklı uzmanlık alanlarına
                hakim olarak yazılım sektöründe çalışmalarını sürdürüyor.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default CareerGuideList;
