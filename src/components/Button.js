import { createUseStyles} from "react-jss"

const useStyles = createUseStyles((theme) => ({
  buttonForm: {
    width: "100%",
    height: "160px",
    border: "1px dashed rgba(0, 0, 0, 0.2)",
    borderRadius: 10,
    fontFamily: "Poppins",
    fontSize: 16,
    fontWeight: 400,
    '&:hover': {
      borderColor: "black",
      cursor: "pointer",
    }
  }
})) 

function Button({ type, onClickHandler, children }) {
  const classes= useStyles();
  //const { type, onClickHandler, children } = props;
  //const {  children } = rest;
  return (
    <button type={type} onClick={onClickHandler} className={classes.buttonForm}>
      {children}
    </button>
  );
}
export default Button;
