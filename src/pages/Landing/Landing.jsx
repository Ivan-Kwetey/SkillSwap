import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "../../components/ui/Navbar/Navbar";
import Mission from "./Mission/Mission";
import Community from "./Community/Community";
import Purpose from "./Purpose/Purpose";
import GetStarted from "./GetStarted/GetStarted";


const Landing = () => {
  const handleRegister = () => alert("registered!");
  const handleSignIn = () => alert("signed in!");

  return (
    <>
      <Navbar handleRegister={handleRegister} handleSignIn={handleSignIn} />
      <Hero handleRegister={handleRegister} handleSignIn={handleSignIn} />
      <Mission />
      <Community />
      <Purpose/>
      <GetStarted/>
    </>
  );
};
export default Landing;
