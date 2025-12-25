import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "../../components/ui/Navbar/Navbar";
import Mission from "./Mission/Mission";
import Community from "./Community/Community";

const Landing = () => {
  const handleRegister = () => alert("registered!");
  const handleSignIn = () => alert("signed in!");

  return (
    <>
      <Navbar handleRegister={handleRegister} handleSignIn={handleSignIn} />
      <Hero handleRegister={handleRegister} handleSignIn={handleSignIn} />
      <Mission />
      <Community />
    </>
  );
};
export default Landing;
