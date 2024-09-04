import { Button } from "react-bootstrap";
import "./CourseHeader.css";
import { NavLink } from "react-router-dom";

function CourseHeader() {
  return (
    <div className="all-course-header-shell">
      <div className="all-course-container">
        <div className="row">
          <div>
            <NavLink to="/" className="all-course-tags">
              Anasayfa
            </NavLink>
            <span style={{ color: "#fff" }}>›</span>&emsp;
            <NavLink className="all-course-tags">Eğitimler</NavLink>
            <h1 className="all-course-header">Eğitimler</h1>
            <p className="all-course-header-text">
              Teknoloji dünyasında yer alan konular hakkında eğitim almak için
              doğru yerdesin! Sektörün önde gelen uzman eğitmenleri ile
              hazırladığımız eğitimleri tamamlayarak kariyerinde bir adım ileri
              gidebilir, yeteneklerini geliştirebilirsin. Eğitimleri takip et,
              tamamla ve yeteneklerini geliştirmek için hazır ol!
            </p>
            <div className="course-header-tag">Ücretsizdir</div>
            <Button variant="success" className="all-course-button">
              Keşfet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseHeader;
