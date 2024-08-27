import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Header from "./components/Header";
import Slider from "./components/Slider.jsx";
import CompanyLogoSlider from "./components/CompanyLogoSlider.jsx";
import EventList from "./components/EventCardList.jsx";
import Infotech from "./components/Infotech.jsx";
import CareerGuide from "./components/CareerGuide.jsx";
import InfoSection from "./components/InfoSection.jsx";
import ContactSection from "./components/ContactSection.jsx";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <CompanyLogoSlider />
      <EventList />
      <Infotech />
      <CareerGuide />
      <InfoSection />
      <ContactSection/>
    </>
  );
}

export default App;
