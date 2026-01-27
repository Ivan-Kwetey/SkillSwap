export default function FormInput({
  value,
  onChange,
  placeholder,
  id,
  name,
  type = "text",
  autoComplete,
  className 
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete={autoComplete}
      className={className}
    />
  );
}
