import React, { useState } from "react";
import Button from "../components/Button";
import PopUp from "../simplecomponent/PopUp";
import Form from "./Form";

import { httpPostContent } from "../api.http";
import { CardContentFormModel } from "../FormModel";

const CardButtonAdder = ({ dashKey, loadDashboard }) => {
  const [show, setShow] = useState(false);
  const onClickHandler = (e) => {
    setShow(!show);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const { value } = e.target[CardContentFormModel.text];
    if (value !== "") {
      const content = { text: value };
      const isSuccess = await sendContent(content);
      setShow(!isSuccess);
      loadDashboard();
    } else {
      console.log("Stringa content vuota.");
    }
  };
  const sendContent = async (data) => {
    try {
      await httpPostContent(dashKey, data);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  return (
    <>
      <Button onClickHandler={onClickHandler}>Add Card</Button>
      {show && (
        <PopUp>
          <div className="form-container">
            <Form onSubmit={onSubmitHandler} onClose={() => setShow(false)}>
              Add Card
            </Form>
          </div>
        </PopUp>
      )}
    </>
  );
};

export default CardButtonAdder;
