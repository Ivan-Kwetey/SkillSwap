import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Footer from "../../components/ui/Footer/Footer";
import "./Register.css";
import Button from "../../components/ui/Button/Button";
import FormInput from "../../components/ui/FormInput/FormInput";

export default function Register() {
  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("register attempted");
    console.log("EMAIL:", email);

    if (!email) {
      alert("Please enter your email");
      return;
    }
    login(email);

    navigate("/home");
  };

  return (
    <div className="register">
      <form action="" className="register__form" onSubmit={handleRegister}>
        <div className="register__form-header">
          <h2 className="register__form-title">Create SkillSwap Account</h2>
          <p className="register__form-subtitle">
            Join our community, start swapping
          </p>
        </div>
        <div className="register__form-input">
          <FormInput
            variant="username"
            placeholder={"Email or Username"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="register__form-subheader">
          <p className="register__form-button-text">
            Create your free SkillSwap account and start swapping skills with
            our community
          </p>
          <div className="register__form-buttons">
            <Button text="register" variant="register" type="submit" />
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
}
