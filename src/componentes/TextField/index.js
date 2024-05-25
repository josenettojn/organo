import "./TextField.css";

export const TextField = (props) => {
  const whenTyping = (e) => {
    props.whenChanging(e.target.value);
  };

  return (
    <div className="text-field">
      <label>{props.name}</label>
      <input
        value={props.value}
        onChange={whenTyping}
        required={props.required}
        placeholder={props.placeholder}
      />
    </div>
  );
};
