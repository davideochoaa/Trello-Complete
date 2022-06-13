import React, { useState , useEffect} from "react";
import Button from "../../components/Button";
import PopUp from "../../components/PopUp";
import Form from "./Form";
import { CardContentFormModel,imgForm,TitleContentFormModel } from "./FormModel";
import { httpPostContent } from "../../api.http.js";
import { useSelector } from "react-redux";
import { createUseStyles} from "react-jss"
/* import Card from "./Card"; */

 const useStyles = createUseStyles((theme) => ({
  dropdownmenubutton: {
    borderRadius: 10,
    border:0,
    backgroundColor: "#F4F4F4",
    color: "#b2b2b2",
    '&:hover': {
      color: "black",
      cursor: "pointer",
    }
  },
  titleContainer: {
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    display:"flex",
    flexDirection: "flex-row",
    margin: "10px 0",
    padding: "14px"
  },
  bucketTitle: {
    flexGrow:1,
    textAlign: "left",
  },
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

const Bucket = ({ title, children, dashKey, loadDashboard }) => {

  const classes= useStyles();

  const [show, setShow] = useState(false);
  
  const onClickHandler = (e) => {
    setShow(!show);
  };

  const dashboards = useSelector((state) => state.app.dashboards)
  useEffect(() => {
    //console.log(dashboards)
  }, [dashboards])

  const prova = async(e) => {
    e.preventDefault();
    const { value } = e.target[CardContentFormModel.text];
    console.log(value);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const text = e.target[CardContentFormModel.text];
    const titoletto = e.target[TitleContentFormModel.title];
    const immagine = e.target[imgForm.img];
    console.log(text.value);
    console.log(titoletto.value);
    console.log(immagine.value);
    const stringImg = immagine.value.toString();
    console.log(stringImg)
    if (titoletto.value !== "" | text.value !== "" | immagine.value !== "") {
      const descr = { text: text.value };
      const titleCard = { title: titoletto.value};
      const imgLink = {img : stringImg};
      const isSuccess = await sendContent(descr,titleCard,imgLink);
      setShow(!isSuccess);
      loadDashboard();
    } else if(titoletto.value !== "") {
      const descr = {text: "" };
      const titleCard = { title: titoletto.value};
      const imgLink = {img : ""};
      const isSuccess = await sendContent(descr,titleCard,imgLink);
      setShow(!isSuccess);
      loadDashboard();
    } else {
      console.log("Stringa titolo vuoto.");
    }
  };

  const sendContent = async (descr, titleCard, imgLink) => {
    try {
      await httpPostContent(dashKey, descr, titleCard, imgLink);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <div className ="bucket">
      <div className = {classes.titleContainer}>
      <h2 className = {classes.bucketTitle}>{title}</h2>
      <button className = {classes.dropdownmenubutton}>
      <i className="fa-solid fa-ellipsis"></i>
      </button>
      </div>
      <div className="cards">{children}</div>
      <Button onClickHandler={onClickHandler} className={classes.buttonForm}>+ Add new card</Button>
      {show && (
        <PopUp>
            <Form onSubmit={onSubmitHandler} onClose={() => setShow(false)}>
            </Form>
        </PopUp>
      )}
    </div>
  );
};
export default Bucket;
