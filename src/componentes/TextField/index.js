import "./TextField.css";

export const TextField = ({ name, placeholder }) => {
  return (
    <div className="text-field">
      <label>{name}</label>
      <input placeholder={placeholder} />
    </div>
  );
};
