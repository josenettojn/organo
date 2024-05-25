import "./TextField.css";

export const TextField = ({ name, placeholder, required }) => {
  return (
    <div className="text-field">
      <label>{name}</label>
      <input required={required} placeholder={placeholder} />
    </div>
  );
};
