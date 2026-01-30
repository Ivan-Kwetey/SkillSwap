import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero/Hero";
import Mission from "./Mission/Mission";
import Community from "./Community/Community";
import Purpose from "./Purpose/Purpose";
import GetStarted from "./GetStarted/GetStarted";

const Landing = () => {
  const navigate = useNavigate();

  // Navigate to signup page
  const handleRegister = () => navigate("/register");

  // Optional: handle sign in separately
  const handleSignIn = () => navigate("/login");

  return (
    <>
      <Hero handleRegister={handleRegister} handleSignIn={handleSignIn} />
      <Mission handleRegister={handleRegister} />
      <Community handleRegister={handleRegister} />
      <Purpose handleRegister={handleRegister} />
      <GetStarted handleRegister={handleRegister} />
    </>
  );
};

export default Landing;
