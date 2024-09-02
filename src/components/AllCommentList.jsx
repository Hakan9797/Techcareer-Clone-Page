import { Card, Col, Row } from "react-bootstrap";
import CommentCardData from "../data/CommentData";

// Kart bileşeni
const CommentCard = ({ image, comment, bootcamp, person }) => {
  return (
    <Card className="comment-card">
      <Row>
        <Col md={0}>
          <img src={image} className="comment-image" />
        </Col>
        <Col md={12}>
          <Card.Body>
            <div className="comment-text">{comment}</div>
            <div className="comment-user">{person}</div>
            <div className="bootcamp">{bootcamp}</div>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

function AllCommentList() {
  return (
    <div className="card-shell">
      <div className="event-list-container">
        <div className="text-center ">
          <Row className="justify-content-center">
            {CommentCardData.map((card) => (
              <Col
                md={6}
                lg={4}
                className="d-flex justify-content-center mb-4"
                key={card.id}
              >
                <CommentCard
                  image={card.image}
                  comment={card.comment}
                  person={card.person}
                  bootcamp={card.bootcamp}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AllCommentList;
