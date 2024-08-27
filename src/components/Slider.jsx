
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
  return (
    <div className="outer-container">
      <Carousel className="container">
        <Carousel.Item interval={5000}>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 " src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 " src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 " src={img4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 " src={img5} alt="Fifth slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 " src={img6} alt="Sixth slide" />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100 " src={img7} alt="Seventh slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100 " src={img8} alt="Eighth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
