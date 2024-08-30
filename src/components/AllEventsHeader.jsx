import { Button } from "react-bootstrap";
import "./AllEventsHeader.css";
import { NavLink } from "react-router-dom";

function AllEventsHeader() {
  return (
    <div className="all-event-header-shell">
      <div className="all-event-container">
        <div className="row">
          <div>
            <NavLink to="/" className="all-event-tags">
              Anasayfa
            </NavLink>
            <span style={{ color: "#fff" }}>›</span>&emsp;
            <NavLink className="all-event-tags">Etkinlikler</NavLink>
            <h1 className="all-event-header">Tüm Etkinlikler</h1>
            <p className="all-event-header-text">
              Techcareer.net ile teknoloji dünyasına adım at! En yenilikçi
              yazılım eğitimleri ve teknoloji yarışmalarına katıl, bilgi ve
              becerilerini geliştir. Hemen keşfet, hızla başvur ve kariyerini
              ileri taşı!
            </p>
            <Button variant="success" className="all-event-button">Keşfet</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllEventsHeader;
