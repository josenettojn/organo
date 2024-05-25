import "./DropDown.css";

export const DropDown = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        value={props.value}
        required={props.required}
        onChange={(e) => props.whenChanging(e.target.value)}
      >
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};
