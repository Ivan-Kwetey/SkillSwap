import "./Button.css";

export default function Button({ text, variant = "primary", className = "" }) {
  return (
    <button
      className={`button button--${variant} button__primary`}
      onClick={onclick}
    >
      {text}
    </button>
  );
}
