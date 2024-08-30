import React from "react";
import { Card, Button } from "react-bootstrap";
import "./EventCard.css";

function EventCard({ event, buttonText }) {
  return (
    <Card className="event-card">
      <Card.Img variant="top" src={event.image} alt={event.title} />
      <Card.Body>
        <Card.Title className="event-title">{event.title}</Card.Title>
        <Card.Text className="event-description">{event.description}</Card.Text>
        <div className="event-tags d-flex justify-content-center mb-3">
          <div className="event-tag">Bootcamp</div>
          <div className="event-tag">İş Fırsatı</div>
        </div>
        <Card.Text className="event-date">
          <span className="text">SON BAŞVURU:</span> {event.date}
        </Card.Text>
        <Button variant="success" className="event-button">
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default EventCard;
