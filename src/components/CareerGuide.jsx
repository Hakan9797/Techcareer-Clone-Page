import { Button } from "react-bootstrap";
import "./CareerGuide.css";

function CareerGuide() {
  return (
    <div className="career-shell">
      <div className="career-container">
        <div className="row">
          <div>
            <h4 className="section-header">Kariyer Rehberi'yle Geliş</h4>
            <p className="section-question">
              Yeni teknoloji kariyerini seçmeye hazır mısın?
            </p>
            <p className="section-info">
              Teknoloji alanında kariyer yapmak istiyor ancak hangi pozisyonu
              seçeceğini veya seçtiğin pozisyonda hangi adımlardan geçmen
              gerektiğini bilmiyorsan, Kariyer Rehberi ile en doğru yerdesin!
            </p>
            <Button className="career-button">Hemen İncele</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerGuide;
