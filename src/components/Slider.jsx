import img1 from "../assets/sliderimages/img1.png";
import img2 from "../assets/sliderimages/img2.png";
import img3 from "../assets/sliderimages/img3.png";
import img4 from "../assets/sliderimages/img4.png";
import img5 from "../assets/sliderimages/img5.png";
import img6 from "../assets/sliderimages/img6.png";
import img7 from "../assets/sliderimages/img7.png";
import img8 from "../assets/sliderimages/img8.png";
import Carousel from "react-bootstrap/Carousel";
import "./Slider.css";

function Slider() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <div className="outer-container">
      <Carousel className="container">
        {images.map((image, index) => (
          <Carousel.Item key={index} interval={5000}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="d-block w-100"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
