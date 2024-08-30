import { Row, Col, Button } from "react-bootstrap";
import EventCard from "./EventCard";
import "./EventCardList.css";
import event1 from "../assets/eventimages/event1.png";
import event2 from "../assets/eventimages/event2.png";
import event3 from "../assets/eventimages/event3.png";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    image: event1,
    title: "Node.js Workshop",
    date: "26.08.2024",
    description: "Ücretsiz öğren, mezun ol, iş fırsatı yakala!",
  },
  {
    id: 2,
    image: event2,
    title: "PHP Prodigy: WebApp Development Bootcamp",
    date: "01.09.2024",
    description: "Ücretsiz öğren, mezun ol, iş fırsatı yakala!",
  },
  {
    id: 3,
    image: event3,
    title: "C# Essentials Bootcamp",
    date: "02.09.2024",
    description: "Ücretsiz öğren, mezun ol, iş fırsatı yakala!",
  },
];

function EventList() {
  const navigate = useNavigate();

  function handleClick() {
    window.scrollTo(0, 0);
    navigate("/allevents");
  }

  return (
    <div className="card-shell">
      <div className="event-list-container">
        <div className="text-center ">
          <h2 className="section-title">Başvurunu Bekleyen Etkinlikler</h2>
          <Row className="justify-content-center">
            {events.map((event) => (
              <Col
                key={event.id}
                md={6}
                lg={4}
                className="d-flex justify-content-center mb-4"
              >
                <EventCard event={event} buttonText="Başvur" />
              </Col>
            ))}
          </Row>
          <Button variant="success" onClick={handleClick} className="section-button my-4">
            Tüm Etkinlikleri Gör
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EventList;
