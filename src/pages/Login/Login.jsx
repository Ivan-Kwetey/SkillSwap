import { useState, React } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Footer from "../../components/ui/Footer/Footer";
import "./Login.css";
import Button from "../../components/ui/Button/Button";
import FormInput from "../../components/ui/FormInput/FormInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login attempted");
    console.log("EMAIL:", email);

    if (!email) {
      alert("Please enter your email");
      return;
    }
    login(email);

    navigate("/home");
  };

  return (
    <div className="login">
      <form action="" className="login__form" onSubmit={handleLogin}>
        <div className="login__form-header">
          <h2 className="login__form-title">SkillSwap Account</h2>
          <p className="login__form-subtitle">
            Access your account and start swapping
          </p>
        </div>
        <div className="login__form-input">
          <FormInput
            variant="username"
            placeholder={"Email or Username"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login__form-subheader">
          <p className="login__form-button-text">
            Sign in to your account or register for your SkillSwap account for
            free, if you are a new user
          </p>
          <div className="login__form-buttons">
            <Button text="Sign in" variant="signin" type="submit" />
            {/* <Button
              text="register"
              variant="register"
              onclick={() => navigate("/register")}
            /> */}
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
