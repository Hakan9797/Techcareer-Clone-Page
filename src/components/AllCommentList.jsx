import { Button, Card, Col, Row } from "react-bootstrap";
import CommentCardData from "../data/CommentData";
import "./AllCommentList.css";
import { NavLink } from "react-router-dom";
import commentlogo from "../assets/allcommentheaderimage.png";

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
    <>
      {/* Header Section  */}
      <div className="all-comment-header-shell">
        <div className="all-comment-container">
          <div className="row">
            <div className="col-10">
              <NavLink to="/" className="all-comment-tags">
                Anasayfa
              </NavLink>
              <span style={{ color: "#fff" }}>›</span>&emsp;
              <NavLink className="all-comment-tags">
                Bizi Katılımcılardan Dinle
              </NavLink>
              <h1 className="all-comment-header">
                Bizi <span style={{ color: "#00c26d" }}>Katılımcılardan</span>{" "}
                Dinle
              </h1>
              <p className="all-comment-header-text">
                Yeni mezun adayların yeteneklerini geliştirmelerini ve yeni iş
                fırsatlarına ulaşmalarını hedefleyen Techcareer.net'i,
                etkinliklerine katılan birçok adaydan dinleyin.
              </p>
              <Button variant="success" className="all-comment-button">
                Keşfet
              </Button>
            </div>
            <div className="col-2 comment-logo">
              <img src={commentlogo} alt="comment logo" />
            </div>
          </div>
        </div>
      </div>
      {/* Card List Section */}
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
    </>
  );
}

export default AllCommentList;
