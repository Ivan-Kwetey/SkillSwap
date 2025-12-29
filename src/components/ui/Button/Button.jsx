import "./Button.css";

export default function Button({ text, type="button", onClick, variant = "primary", className = "" }) {
  return (
    <button
      className={`button button--${variant} button__primary ${className}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
