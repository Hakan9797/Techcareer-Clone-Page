import { Accordion, Button, Card, Col, Row } from "react-bootstrap";
import CourseData from "../data/CourseData";
import "./CourseList.css";
import { FaIdCard, FaStopwatch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import courselogo from "../assets/coursebackground.png";

const CourseCard = ({
  image,
  title,
  instructor,
  description,
  content1,
  content2,
  content3,
  degree,
  duration,
}) => {
  return (
    <Card className="course-card">
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <h3 className="course-title">{title}</h3>
        <div className="course-instructor">{instructor}</div>
        <p className="course-description">{description}</p>
        <div className="course-tags d-flex">
          <div className="course-tag">{content1}</div>
          <div className="course-tag">{content2}</div>
          <div className="course-tag">{content3}</div>
        </div>
        <hr />
        <div className="bottom-part row">
          <div className="col-4">{degree}</div>
          <div className="col-4">
            <FaStopwatch
              style={{ marginRight: "5px", color: "#878787", opacity: "0.6" }}
            />
            {duration}
          </div>
          <div className="col-4">
            <FaIdCard
              style={{ marginRight: "8px", color: "#878787", opacity: "0.6" }}
            />
            Var
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

function CourseList() {
  return (
    <>
      {/* Header Section  */}
      <div className="all-course-header-shell">
        <div className="all-course-container">
          <Row>
            <div className="col-12 col-md-8">
              <NavLink to="/" className="all-course-tags">
                Anasayfa
              </NavLink>
              <span style={{ color: "#fff" }}>›</span>&emsp;
              <NavLink className="all-course-tags">Eğitimler</NavLink>
              <h1 className="all-course-header">Eğitimler</h1>
              <p className="all-course-header-text">
                Teknoloji dünyasında yer alan konular hakkında eğitim almak için
                doğru yerdesin! Sektörün önde gelen uzman eğitmenleri ile
                hazırladığımız eğitimleri tamamlayarak kariyerinde bir adım
                ileri gidebilir, yeteneklerini geliştirebilirsin. Eğitimleri
                takip et, tamamla ve yeteneklerini geliştirmek için hazır ol!
              </p>
              <div className="course-header-tag">Ücretsizdir</div>
              <Button variant="success" className="all-course-button">
                Keşfet
              </Button>
            </div>
            <div className="col-12 col-md-3 text-center mb-3 mb-md-0">
              <img src={courselogo} alt="course-logo" className="course-logo" />
            </div>
          </Row>
        </div>
      </div>

      {/* Course List Section  */}
      <div className="course-shell">
        <div className="course-list-container">
          <h2 className="course-list-title">Tüm Eğitimler</h2>
          <Row>
            {CourseData.map((course) => (
              <Col
                key={course.id}
                md={6}
                lg={4}
                className="d-flex justify-content-center mb-4"
              >
                <CourseCard
                  image={course.image}
                  title={course.title}
                  instructor={course.instructor}
                  description={course.description}
                  content1={course.content1}
                  content2={course.content2}
                  content3={course.content3}
                  degree={course.degree}
                  duration={course.duration}
                />
              </Col>
            ))}
            <Accordion className="course-accordion mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Eğitimler Hakkında</Accordion.Header>
                <Accordion.Body>
                  Techcareer.net olarak, hem teknoloji paydaşları hem yeni
                  başlayanlar hem de meraklıları için özel olarak tasarlanmış,
                  geniş yelpazede, ücretsiz eğitim modülleri sunmaktayız.
                  Amacımız, katılımcılara sektörde en çok talep gören bilgi ve
                  yetkinlikleri kazandırarak, onların profesyonel dünyada
                  başarılı bir kariyer inşa etmelerine katkı sağlamaktır.
                  Eğitimlerimiz, alanında uzman ve deneyimli eğitmenler
                  tarafından verilen kapsamlı içeriklerle desteklenmektedir.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </div>
      </div>
    </>
  );
}

export default CourseList;
