import { createUseStyles } from "react-jss"
import { httpPutLike, httpLeaveLike, httpDeleteCard, httpCreateComment } from "../../api.http";
import { CommentsIcon } from "../../assets/icons";
import { useState, useEffect } from "react";
import PopUp from "../../components/PopUp";
import Adduser from "./Adduser";
import Addcomment from "./Addcomment";
import { commentForm } from "./FormModel";

const cardStyles = createUseStyles((theme) => ({
  card: {
    backgroundColor: "#F4F4F4",
    borderRadius: 12,
    maxWidth: 300,
    padding: 14,
    marginBottom: 10,
  },
  cardTitle: {
    textAlign: "left",
    margin: 0,
  },
  cardDescr: {
    textAlign: "left",
    marginBottom: 5,
  },
  cardText: {
    color: "black",
  },
  cardIcons: {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  socialIcons: {
    display: "flex",
    gap: 10,
    height: "min-content",
  },
  cardLabel: {
    displat: "flex",
    width: "100%",
    height: "min-content",
    justifyContents: "center",
    gap: 5,
  },
  imgContainer: {
    margin: "0 auto",
    minHeight: 0,
    display: "inherit"
  },
  img: {
    boxContainer: "border-box",
    width: "100%",
    display: "inherit",
    marginBottom: 10,
    borderRadius: 10,
  },
  label: {
    backgroundColor: "#ff0",
    width: 60,
    height: 8,
    borderRadius: 4,
    margin: "0 8px",
  },
  numbers: {
    fontSize: 14,
    margin: "0",
  },
  addUserButton: {
    margin: 0,
    backgroundColor: "black",
    color: "white",
    padding: "3px 5px",
    border: "none",
    borderRadius: "100%",
    '&:hover': {
      backgroundColor: "grey",
      cursor: "pointer",
    }
  },
  comments: {
    color: "#b2b2b2",
    display: "flex",
    alignItems: 'center',
    transitionDuration: "0.3s",
    '&:hover': {
      color: "#569fab",
      cursor: "pointer",
      '& span': {
        fill: "red",
      }
    }
  },
  liked: {
    display: "flex",
    alignItems: 'center',
    transitionDuration: "0.3s",
    color: "#b2b2b2",
    '&:hover': {
      color: "#ff8484",
      cursor: "pointer",
    }
  },
  likedClick: {
    display: "flex",
    alignItems: 'center',
    transitionDuration: "0.3s",
    color: "red",
    '&:hover': {
      color: "#ff8484",
      cursor: "pointer",
    }
  },
  attachments: {
    display: "flex",
    alignItems: 'center',
    transitionDuration: "0.3s",
    color: "#b2b2b2",
    '&:hover': {
      color: "black",
      cursor: "pointer",
    }
  }
}))

function Card({ descr, title, comments, like, attachments, id, dashKey, loadDashboard, imgLink, ...rest }) {
  const classes = cardStyles();
  const [isRun, setIsRun] = useState(false);
  const [show, setShow] = useState(false);
  const [lock, setLock] = useState(false);

  const onClickHandler = (e) => {
    setShow(!show);
  }

  const onClickHandler2 = (e) => {
    setLock(!lock);
  }


  const handleLike = async (e) => {
    if (isRun === false) {
      e.currentTarget.className = classes.likedClick;
      const success = await sendContent(id);/* httpPutLike(id); */
      setIsRun(!success)
      loadDashboard();
    } else if (isRun === true) {
      e.currentTarget.className = classes.liked;
      const dislike = await sendDislike(id);
      setIsRun(!dislike);
      loadDashboard()
    }
  };

  const sendContent = async (id) => {
    try {
      await httpPutLike(id);
      return false;
    } catch (err) {
      console.log(err);
      return true;
    }
  };

  const sendDislike = async (id) => {
    try {
      await httpLeaveLike(id);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };
  const handleDeleteCard = async (e) => {
    try {
      await httpDeleteCard(dashKey, id);
      loadDashboard();
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const gino = e.target[commentForm.text]
    if (gino.value !== "") {
      const comment = { text: gino.value };
      httpCreateComment(dashKey, id, comment);
      return loadDashboard();
    } else {
      console.log("Stringa commento vuota.");
    }
  };
  /*   const cancellaCard = async (id) => {
      try {
        await httpDeleteCard(id);
      } catch (err) {
        console.log(err);
      }
    } */

  return (
    <div className={classes.card}>
      <div className={classes.imgContainer}>
        <img src={imgLink} className={classes.img}></img>
      </div>
      <div className={classes.cardLabel}>
        <div className={classes.label}></div>
      </div>
      <h3 className={classes.cardTitle}>{title}</h3>
      <div className={classes.cardDescr}>{descr}</div>
      <div className={classes.cardIcons}>
        <span className={classes.addUserButton} onClick={onClickHandler}>
          <span className="material-symbols-outlined">
            add
          </span>
          </span>
          {show && (
            <PopUp>
              <Adduser onClose={() => setShow(false)} deleteFunction={handleDeleteCard}>
              </Adduser>
            </PopUp>
          )}

        <div className={classes.socialIcons}>
          <span className={classes.comments} onClick={onClickHandler2}><p className={classes.numbers}>{comments}</p><span className="material-symbols-outlined">
            sms
          </span>
          </span>
            {
              lock && (
                <PopUp>
                  <Addcomment onClose2={() => setLock(false)} onSubmit2={onSubmitHandler}>
                  </Addcomment>
                </PopUp>
              )}
          <span className={classes.liked} onClick={handleLike}><p className={classes.numbers}>{like}</p><span className="material-symbols-outlined">favorite</span></span>
          <span className={classes.attachments}><p className={classes.numbers}>{attachments}</p><span className="material-symbols-outlined">attach_file</span></span>
        </div>
      </div>
    </div>
  );
}
export default Card;
