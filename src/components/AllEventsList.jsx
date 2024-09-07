import { Row, Col, Pagination, Button } from "react-bootstrap";
import EventCard from "./EventCard";
import "./EventCardList.css";
import "./AllEventsList.css";
import allevents from "../data/AllEventsData";
import { NavLink } from "react-router-dom";
import alleventslogo from "../assets/alleventheaderimage.png";

function AllEventsList() {
  return (
    <>
      {/* Header Section  */}
      <div className="all-event-header-shell">
        <div className="all-event-container">
          <Row>
            <div className="col-12 col-md-7">
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
              <Button variant="success" className="all-event-button">
                Keşfet
              </Button>
            </div>
            <div className="col-12 col-md-5 text-center mb-3 mb-md-0">
              <img
                src={alleventslogo}
                alt="course-logo"
                className="allevents-logo"
              />
            </div>
          </Row>
        </div>
      </div>

      {/* Card List Section  */}
      <div className="card-shell">
        <div className="event-list-container">
          <div className="text-center ">
            <h2 className="section-title">Başvurunu Bekleyen Etkinlikler</h2>
            <Row className="justify-content-center">
              {allevents.map((event) => (
                <Col
                  key={event.id}
                  md={6}
                  lg={4}
                  className="d-flex justify-content-center mb-4"
                >
                  <EventCard event={event} buttonText="Başvur" />
                </Col>
              ))}
              <Pagination className="custom-pagination">
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllEventsList;
