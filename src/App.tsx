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

import { HSStaticMethods } from "preline";
import { useEffect   } from "react";
import { useLocation } from "react-router-dom";

HSStaticMethods.autoInit();



function App() {

  const location = useLocation();

  useEffect(() => {
    require('preline/preline');
  }, []);

  useEffect(() => {
   
    HSStaticMethods.autoInit();
  }, [location.pathname]);



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
