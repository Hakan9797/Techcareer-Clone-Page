import icon1 from "../assets/icons/icon1.png";
import icon2 from "../assets/icons/icon2.png";
import icon3 from "../assets/icons/icon3.png";
import "./Infotech.css";

function Infotech() {
  return (
    <div className="info-shell">
      <div className="tech-container">
        <h2 className="info-title">Neden Techcareer.net?</h2>
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <img src={icon1} alt="icon1" className="info-icon" />
            <h3 className="info-card-title">Ücretsiz etkinliklere katıl</h3>
            <p className="info">
              Yolun başındasın ama en güzel aşamasındasın! Sektörün için gereken
              tüm becerileri burada öğrenmeye ücretsiz etkinlikler ile
              başlayacaksın.
            </p>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <img src={icon2} alt="icon2" className="info-icon" />
            <h3 className="info-card-title">Kendini kanıtla</h3>
            <p className="info">
              Bootcamp, Hackathon ve Hiring Challenge etkinliklerine katılarak
              hem becerilerini geliştirecek hem de ödül kazanma fırsatı
              yakalayacaksın.
            </p>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <img src={icon3} alt="icon3" className="info-icon" />
            <h3 className="info-card-title">İş fırsatı yakala</h3>
            <p className="info">
              Sektöründe lider teknoloji şirketleriyle tanışacak ve iş
              fırsatları yakalayacaksın.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infotech;
