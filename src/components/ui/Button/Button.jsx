import "./Button.css";

export default function Button({
  icon,
  alt = "",
  text,
  type = "button",
  onClick,
  variant = "primary",
  className = "",
}) {
  return (
    <button
      className={`button button--${variant} button__primary ${className}`}
      onClick={onClick}
      type={type}
    >
      <span>{text}</span>
      {icon && <img src={icon} alt={alt} className="button__icon" />}
    </button>
  );
}
