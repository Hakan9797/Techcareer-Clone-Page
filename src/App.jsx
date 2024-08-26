import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./components/Slider.jsx";
import CompanyLogoSlider from "./components/CompanyLogoSlider.jsx";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <CompanyLogoSlider />
    </>
  );
}

export default App;
