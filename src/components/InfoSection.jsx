import icon4 from "../assets/icons/icon4.png";
import icon5 from "../assets/icons/icon5.png";
import icon6 from "../assets/icons/icon6.png";
import "./Info.css";
import { BsArrowRight } from "react-icons/bs";

function InfoSection() {
  return (
    <div className="info-shell">
      <div className="tech-container">
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
              Bootcamp etkinlikleri, yazılım teknolojileri, veri bilimi, ürün
              yönetimi gibi teknolojik konularda düzenlenir. Hem eğitim
              alabilir, hem de o alanda işe başlayabilecek kadar fazla bilgi ve
              donanım kazanabilirsin.
            </p>
            <a href="#" className="apply-tag">
              Hemen Başvur{" "}
              <BsArrowRight
                color="#00c26d"
                size="1rem"
                style={{ marginLeft: "5px" }}
              />
            </a>
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
              Hackathon etkinliklerinde takımlar halinde veya bireysel olarak
              yarışacaksın. Etkinlik için belli bir zaman verilir ve yeni
              fikirler, yeni dijital ürünler üretmesi, sonra da bunları
              kodlaması istenir.
            </p>
            <a href="#" className="apply-tag">
              Hemen Başvur{" "}
              <BsArrowRight
                color="#00c26d"
                size="1rem"
                style={{ marginLeft: "5px" }}
              />
            </a>
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
              Hiring Challenge yarışmalarında Android, iOS, algoritma veya kod
              hatası gibi problemleri belirli bir zaman aralığı
              içerisinde çözmeye çalışacaksın. Bu yarışmalarda algoritma
              tasarımına, özgünlüğe ve kod kalitesine göre puan alırsın.
            </p>
            <a href="#" className="apply-tag">
              Hemen Başvur{" "}
              <BsArrowRight
                color="#00c26d"
                size="1rem"
                style={{ marginLeft: "5px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
