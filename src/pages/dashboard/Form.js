import InputText from "../../components/InputText";
import "./css/Form.css";
import { useState } from "react";
import { CardContentFormModel,TitleContentFormModel, userNameForm, categoryForm , imgForm, scadenzaForm} from "./FormModel";
import { createUseStyles} from "react-jss"


const formStyle = createUseStyles((theme) => ({
  headerFormSection: {
    backgroundColor: "#F5F5F5",
    width: "70vw",
    height: "80vh",
    position: "fixed",
    top:"50%",
    left: "50%",
    marginTop: "-40vh",/* Negative half of height. */
    marginLeft: "-35vw",/* Negative half of width. */
    borderRadius: 14,
  },
  titleForm:{
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 40,
    lineHeight: "64px",
    margin: "30px 30px",
  },
  bigContainer: {
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "row",
    padding: "0 25px",
    width: "100%",
  },
    containers: {
      boxSizing: "border-box",
      flexGrow: 1,
      padding: "0 25px",
      display:"flex",
      flexDirection: "column",
    },
    inputContainerDescrizione:{
      textAlign: "left",
      flexGrow: 1,
    },
      inputContainerDesc: {
        margin: "5px 0",
        height: "80%",
        border: "none",
        backgroundColor: "white",
        borderRadius: 20,
        width: "100%",
      },
    inputContainerImmagine:{
      textAlign: "left",
      flexGrow: 1,
    },
      inputContainerImg: {
        margin: "5px 0",
        height: "80%",
        border: "none",
        backgroundColor: "white",
        borderRadius: 20,
        width: "100%",
      },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
    },  
        labelText: {
          textAlign: "left",
        },
        inputText: {
          margin: "5px 0",
          border: "none",
          backgroundColor: "white",
          borderRadius: 20,
          width: "100%",
          height: "50px",
        },
  buttonsContainers:{
    marginTop: "20px",
    marginBottom: "50px",
  },
    annullaButton: {
      padding: "20px 60px",
      borderRadius: 12,
      border: "2px solid #0C0B0B",
      fontFamily: "Poppins",
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: "36px",
      margin: "0 20px",
      '&:hover': {
        backgroundColor: "black",
        color: "white",
        cursor: "pointer",
      }
    },
    confirmButton: {
      padding: "20px 60px",
      borderRadius: 12,
      border: "2px solid #0C0B0B",
      backgroundColor: "#0c0b0b",
      fontFamily: "Poppins",
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      lineHeight: "36px",
      margin: "0 20px",
      '&:hover': {
        backgroundColor: "white",
        cursor: "pointer",
        color: "black",
      }
  }
})) 

function CreateCardContentForm({ onSubmit, onClose }) {
  const classes= formStyle();

  const [cardContent, setCardContent] = useState({
    [CardContentFormModel.text]: "",
  });
  const [titleContent, setTitleContent] = useState({
    [TitleContentFormModel.title]: "",
  });

  const [usernameContent, setUsernameContent] = useState({
    [userNameForm.username]: "",
})

  const [categoryContent, setCategoryContent] = useState({
    [categoryForm.category]: "",
})

const [imgContent, setImgContent] = useState({
    [imgForm.img]: "",
})

const [scadenzaContent, setScadenzaContent] = useState({
    [scadenzaForm.scadenza]: "",
})

  const onChangeHandler = (e) => {
    const { value, name } = e.target;
    setCardContent({ ...cardContent, [name]: value });
  };

  const onChangeHandlerTitle = (e) => {
    const { value, name } = e.target;
    setTitleContent({ ...titleContent, [name]: value })
  }

  const onChangeHandlerUsername = (e) => {
    const { value, name } = e.target;
    setUsernameContent({ ...usernameContent, [name]: value })
  }

  const onChangeHandlerCategory = (e) => {
    const { value, name } = e.target;
    setCategoryContent({ ...categoryContent, [name]: value })
  }

  const onChangeHandlerImg = (e) => {
    const { value, name } = e.target;
    setImgContent({ ...imgContent, [name]: value })
  }

  const onChangeHandlerScadenza = (e) => {
    const { value, name } = e.target;
    setScadenzaContent({...scadenzaContent, [name]: value})
  }

  /*const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const { text } = cardContent;
      const { data } = await httpCreateCard(text);
      return data;
    } catch (err) {
      console.log(err);
    }
  };*/

  return (
    <form onSubmit={onSubmit} className={classes.headerFormSection}>
      <h2 className={classes.titleForm}>Add new Card</h2>
      <div>
      </div>
      <div className = {classes.bigContainer}>
        <div className = {classes.containers}>
          <div className={classes.inputContainer}>
            <label className={classes.labelText}>Titolo</label>
              <input className={classes.inputText}
                name={TitleContentFormModel.title}
                id={TitleContentFormModel.title}
                value={titleContent[TitleContentFormModel.title]}
                onChange={onChangeHandlerTitle}
              ></input>
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.labelText}>Assegna a:</label>
              <input className={classes.inputText}
              name={userNameForm.username}
              id={userNameForm.username}
              value={usernameContent[userNameForm.username]}
              onChange={onChangeHandlerUsername}>
              </input>
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.labelText}>Scadenza:</label>
              <input className={classes.inputText}
              name={scadenzaForm.scadenza}
              id={scadenzaForm.scadenza}
              value={scadenzaContent[scadenzaForm.scadenza]}
              onChange={onChangeHandlerScadenza}>
              </input>
          </div>
          <div className={classes.inputContainer}>
            <label className={classes.labelText}>Categoria:</label>
              <input className={classes.inputText}
              name={categoryForm.category}
              id={categoryForm.category}
              value={categoryContent[categoryForm.category]}
              onChange={onChangeHandlerCategory}>
              </input>
          </div>
        </div>
        <div className = {classes.containers}>
            <div className={classes.inputContainerDescrizione}>
              <label className={classes.labelText}>Descrizione</label>
                <input className={classes.inputContainerDesc}
                  name={CardContentFormModel.text}
                  id={CardContentFormModel.text}
                  value={cardContent[CardContentFormModel.text]}
                  onChange={onChangeHandler}
                ></input>
            </div>
            <div className={classes.inputContainerImmagine}>
              <label className={classes.labelText}>Copertina</label>
                <input className={classes.inputContainerImg}
                name={imgForm.img}
                id={imgForm.img}
                value={imgContent[imgForm.img]}
                onChange={onChangeHandlerImg}>
                </input>
            </div>
          </div>
      </div>
      <div className={classes.buttonsContainers}>
      <button type="button" onClick={onClose} className={classes.annullaButton}>
          Annulla
        </button>
      <button type="submit" className={classes.confirmButton} >Submit</button>
      </div>
    </form>
  );
}

export default CreateCardContentForm;
