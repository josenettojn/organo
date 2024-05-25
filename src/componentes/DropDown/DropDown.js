import "./DropDown.css";

export const DropDown = (props) => {
  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select>
        {props.itens.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};
