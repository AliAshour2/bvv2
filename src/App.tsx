import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ConsultingSection from "./components/ConsultingSection/Consulting";
import HeroSection from "./components/HeroSection/HeroSection";
import GrowthAnalysisSection from "./components/GrowthAnalysisSectoin/GrowthAnalysisSection";
import InvestmentSection from "./components/InvestmentSection/InvestmentSection";
import VentureFundsSearch from "./components/VentureFundsSearch/VentureFundsSearch";
import ContactUsSection from "./components/ContactUsSection/ContactUsSection";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { HSStaticMethods } from "preline";
import LayOut from "./components/LayOut/LayOut";

HSStaticMethods.autoInit();

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: <HeroSection />,
        },
        { path: "home", element: <HeroSection /> },
        { path: "consulting", element: <ConsultingSection /> },
        { path: "growth-analysis", element: <GrowthAnalysisSection /> },
        { path: "invesment", element: <InvestmentSection /> },
        { path: "venture-funds", element: <VentureFundsSearch /> },
        { path: "contact-us", element: <ContactUsSection /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
