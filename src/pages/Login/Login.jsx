import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import "./Login.css";
import Button from "../../components/ui/Button/Button";
import FormInput from "../../components/ui/FormInput/FormInput";
import { validateEmail } from "../../utils/validateEmail";

export default function Login() {
  const handleLogin = (e) => {
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
    <div className="login">
      <form
        className="login__form"
        onSubmit={handleLogin}
        aria-labelledby="login-form-title"
      >
        <div className="login__form-header">
          <h2 id="login-form-title" className="login__form-title">
            SkillSwap Account
          </h2>
          <p className="login__form-subtitle">
            Access your account and start swapping
          </p>
        </div>

        <div className="login__form-input-container">
          <FormInput
            className="login__form-input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            type="text"
            autoComplete="username"
          />
        </div>

        <div className="login__form-subheader">
          <p className="login__form-button-text">
            Sign in to your account or register for your SkillSwap account for
            free if you are a new user.
          </p>
          <div className="login__form-buttons">
            <Button text="Sign in" variant="signin" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}
