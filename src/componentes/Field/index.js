import "./Field.css";

export const Field = ({
  name,
  type = "text",
  value,
  whenChanging,
  required,
  placeholder,
}) => {
  const whenTyping = (e) => {
    whenChanging(e.target.value);
  };

  return (
    <div className={`field field-${type}`}>
      <label>{name}</label>
      <input
        type={type}
        value={value}
        onChange={whenTyping}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};
