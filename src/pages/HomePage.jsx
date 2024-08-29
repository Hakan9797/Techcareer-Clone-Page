import Slider from "../components/Slider.jsx";
import CompanyLogoSlider from "../components/CompanyLogoSlider.jsx";
import EventList from "../components/EventCardList.jsx";
import Infotech from "../components/Infotech.jsx";
import CareerGuide from "../components/CareerGuide.jsx";
import InfoSection from "../components/InfoSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import CommentCardSlider from "../components/CommentSlider.jsx";

function HomePage() {
  return (
    <>
      <Slider />
      <CompanyLogoSlider />
      <EventList />
      <Infotech />
      <CareerGuide />
      <CommentCardSlider />
      <InfoSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
