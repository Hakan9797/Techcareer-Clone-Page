import { Carousel, Card, Container, Row, Col, Button } from "react-bootstrap";
import CommentCardData from "../data/CommentData.jsx";
import "./CommentSlider.css";
import { useNavigate } from "react-router-dom";

// Kart bileşeni
const CommentCard = ({ image, comment, bootcamp, person }) => {
  return (
    <Card className="comment-card">
      <Row>
        <Col md={4}>
          <img src={image} className="comment-image" />
        </Col>
        <Col md={8}>
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

// Slider bileşeni
function CommentCardSlider() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/allcomments");
    window.scrollTo(0, 0);
  }

  return (
    <div className="comment-shell">
      <div className="comment-container">
        <h2>Bizi Katılımcılarımızdan Dinle</h2>
        <Carousel indicators={false}>
          {CommentCardData.reduce((result, item, index) => {
            const chunkIndex = Math.floor(index / 2);
            if (!result[chunkIndex]) {
              result[chunkIndex] = []; // yeni slide oluştur
            }
            result[chunkIndex].push(item); // mevcut slide'a kart ekle
            return result;
          }, []).map((slideData, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <Row>
                {slideData.map((card) => (
                  <Col md={6} key={card.id}>
                    <CommentCard
                      image={card.image}
                      comment={card.comment}
                      person={card.person}
                      bootcamp={card.bootcamp}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="text-center">
          <Button
            variant="success"
            className="comment-button "
            onClick={handleClick}
          >
            Tüm Yorumları Gör
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CommentCardSlider;
