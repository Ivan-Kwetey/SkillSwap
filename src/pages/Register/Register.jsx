import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "./Register.css";
import Button from "../../components/ui/Button/Button";
import FormInput from "../../components/ui/FormInput/FormInput";
import { validateEmail } from "../../utils/validateEmail";

export default function Register() {
  const handleRegister = (e) => {
    e.preventDefault();

    const { valid, message } = validateEmail(email);
    if (!valid) {
      alert(message);
      return;
    }

    login(email.trim());
    navigate("/home");
  };

  const [email, setEmail] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="register">
      <form className="register__form" onSubmit={handleRegister}>
        <header className="register__form-header">
          <h1 className="register__form-title">Create SkillSwap Account</h1>
          <p className="register__form-subtitle">
            Join our community and start swapping skills
          </p>
        </header>

        <div className="register__form-input-container">
          <FormInput
            className="register__form-input-field"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
          />
        </div>

        <footer className="register__form-subheader">
          <p className="register__form-button-text">
            Create your free SkillSwap account and start connecting with our
            community.
          </p>
          <div className="register__form-buttons">
            <Button text="Register" variant="register" type="submit" />
          </div>
        </footer>
      </form>
    </div>
  );
}
