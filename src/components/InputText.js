import PropTypes from "prop-types";

function InputText({ name, id, value, onChange }) {
  return (
    <input
      //ref={this.input}
      type={"text"}
      name={name}
      id={id}
      value={value}
      onChange={onChange}
    ></input>
  );
}
InputText.propTypes = {
  name: PropTypes.string,
};
export default InputText;
//InputText.displayName = "InputText"
