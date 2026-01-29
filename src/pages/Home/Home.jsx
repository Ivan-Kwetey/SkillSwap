import React from "react";
import Footer from "../../components/ui/Footer/Footer";
import { ComingSoon } from "../../assets/Images";
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="home-page">
        <img className="coming-soon-img" src={ComingSoon} alt="" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
