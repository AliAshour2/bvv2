import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const LayOut = () => {
  return (
    <>
      <div className="py-12">
        <NavBar />
      </div>

      <Outlet />
      <Footer />
    </>
  );
};

export default LayOut;
