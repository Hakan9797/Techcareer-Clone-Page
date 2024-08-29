import { Row, Col, Pagination } from "react-bootstrap";
import EventCard from "./EventCard";
import "./EventCardList.css";
import allevents from "../data/AllEventsData";

function AllEventsList() {
  return (
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
  );
}

export default AllEventsList;
