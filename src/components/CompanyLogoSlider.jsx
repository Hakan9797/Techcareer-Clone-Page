import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "../assets/logosliderimages/logo1.png";
import logo2 from "../assets/logosliderimages/logo2.png";
import logo3 from "../assets/logosliderimages/logo3.png";
import logo4 from "../assets/logosliderimages/logo4.png";
import logo5 from "../assets/logosliderimages/logo5.png";
import logo6 from "../assets/logosliderimages/logo6.png";
import logo7 from "../assets/logosliderimages/logo7.png";
import logo8 from "../assets/logosliderimages/logo8.png";
import logo9 from "../assets/logosliderimages/logo9.png";
import logo10 from "../assets/logosliderimages/logo10.png";
import logo11 from "../assets/logosliderimages/logo11.png";
import logo12 from "../assets/logosliderimages/logo12.png";
import logo13 from "../assets/logosliderimages/logo13.png";
import logo14 from "../assets/logosliderimages/logo14.png";
import logo15 from "../assets/logosliderimages/logo15.png";
import logo16 from "../assets/logosliderimages/logo16.png";

function CompanyLogoSlider() {
  const companyLogos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
  ];

  const [visibleLogos, setVisibleLogos] = useState(companyLogos.slice(0, 6));

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Geçiş süresi (milisaniye cinsinden)

    return () => clearInterval(intervalId);
  }, [visibleLogos]);

  const handleNext = () => {
    setVisibleLogos((prevLogos) => {
      const firstLogo = prevLogos[0];
      const newLogos = [
        ...prevLogos.slice(1),
        companyLogos[
          (companyLogos.indexOf(prevLogos[5]) + 1) % companyLogos.length
        ],
      ];
      return newLogos;
    });
  };

  return (
    <div className="outer-shell-logo" style={{ backgroundColor: "#f0f0f0f0" }}>
      <Carousel
        controls={false}
        indicators={false}
        interval={null}
        className="container p-2"
      >
        <Carousel.Item>
          <div className="d-flex justify-content-around align-items-center">
            {visibleLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index}`}
                className="company-logo"
              />
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CompanyLogoSlider;
