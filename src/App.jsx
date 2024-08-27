import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./components/Slider.jsx";
import CompanyLogoSlider from "./components/CompanyLogoSlider.jsx";
import "./index.css"
import EventList from "./components/EventCardList.jsx";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <CompanyLogoSlider />
      <EventList/>
    </>
  );
}

export default App;
