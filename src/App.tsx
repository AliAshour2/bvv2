import "./App.css";
import ConsultingSection from "./components/ConsultingSection/Consulting";
import HeroSection from "./components/HeroSection/HeroSection";
import NavBar from "./components/NavBar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GrowthAnalysisSection from "./components/GrowthAnalysisSectoin/GrowthAnalysisSection";
import InvestmentSection from "./components/InvestmentSection/InvestmentSection";
import VentureFundsSearch from "./components/VentureFundsSearch/VentureFundsSearch";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ConsultingSection />
      <GrowthAnalysisSection />
      <InvestmentSection />
      <VentureFundsSearch/>
      <ContactUsSection />
      <Footer/>
    </>
  );
}

export default App;
