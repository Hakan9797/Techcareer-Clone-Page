import "./CareerGuide.css";
import { NavLink } from "react-router-dom";

function CareerGuideHeader() {
  return (
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
          İsimlerini sıkça duyduğun onlarca teknoloji pozisyonunu senin için bir
          araya getirdik! Kariyer Rehberi ile teknoloji pozisyonlarının ne iş
          yaptığını, öğrenme yolculuklarını ve tüm bilgilerini öğreneceksin.
        </p>
      </div>
    </div>
  );
}

export default CareerGuideHeader;
