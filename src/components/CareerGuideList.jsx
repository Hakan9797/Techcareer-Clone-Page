import CareerGuideData from "../data/CareerGuideData";
import "./CareerGuideList.css";
import { Card, Col, Row } from "react-bootstrap";

const CareerCard = ({ image, title, positions }) => {
  return (
    <Card className="career-card">
      <Card.Img src={image} alt={title} />
      <Card.Body>
        <h3 className="career-title">{title}</h3>
        <ul className="position-list">
          {positions.split("\n").map((position, index) => (
            <li key={index}>
              <a className="positions">
                {position}
                <span
                  style={{
                    color: "#1d1d1d",
                    fontSize: "24px",
                    fontWeight: "500",
                    paddingLeft: "8px",
                  }}
                >
                  ›
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

function CareerGuideList() {
  return (
    <div className="career-list-shell">
      <div className="career-list-container">
        <h2 className="career-list-header">
          Kariyer Patikaları ve Pozisyonları
        </h2>
        <div className="text-center">
          <Row>
            {CareerGuideData.map((career) => (
              <Col
                key={career.id}
                md={4}
                lg={3}
                className="d-flex justify-content-center mb-4"
              >
                <CareerCard
                  image={career.image}
                  title={career.title}
                  positions={career.positions}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CareerGuideList;
