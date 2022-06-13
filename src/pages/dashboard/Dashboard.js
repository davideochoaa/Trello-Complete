import React, { useEffect, useState } from "react";
import { useTheme , createUseStyles} from "react-jss"
import { httpGetDashboards } from "../../api.http";
import Bucket from "./Bucket";
import Card from "./Card";
import { setDashboards } from "../../store/appSlice";
import { useDispatch, useSelector } from "react-redux";
import {fetchDashboards} from "../../store/appSlice";


const useStyles = createUseStyles((theme) => ({
  header: {
    height: "58px",
    minWidth: "100vw",
    borderBottom: "solid 1px #b2b2b2",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  titleHeader:{
    
    fontFamily: "'Baloo Bhai 2', cursive",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 40,
    lineHeight: "64px",
    margin: "0 30px",
  },
  rectangleBar:{
    borderLeft: "solid 1px #b2b2b2",
    height: "70%",
  },
  searchBar: {
    width: "500px",
    height: "50%",
    backgroundColor: "#f4f4f4",
    borderRadius: "25px",
    margin: "0 46px",
    display: "flex",
    justifyContent: "flex-end",
    flexGrow: 1,
    padding: "5px 14px 2px 14px",
    '& span' : {
      lineHeight: 1,
    }
  },
  dashboard: {
    display: "flex",
    gap: 16,
    minWidth: "100vw",
    minHeight: '100vh',
    backgroundColor: theme.colors.primary,
    color: theme.colors.text,
    paddingTop: 10,
  },
  imgContainer: {
    margin: "9px 30px",
    minHeight: 0,
    display: "inherit",
    alignSelf: "flex-end"
  },
  userIconImage: {
    textAlign: "center",
    boxContainer: "border-box",
    width: 45,
    borderRadius: "100%",
  }
}))

const Dashboard = () => {
  const myDashboards = useSelector((state) => state.app.dashboards)
  const dispatch = useDispatch();


  //const [myDashboards, setMyDashboards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const theme = useTheme() 
  const classes= useStyles();

  useEffect(() => {
    loadDashboard();

  }, []);

  const loadDashboard = async () => {
    await dispatch(fetchDashboards());
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(myDashboards)
  }, [myDashboards])


  return (
    <>
      <header className={classes.header}>
        <div className={classes.titleHeader}>T.</div>
        <div className={classes.rectangleBar}></div>
        <div className={classes.searchBar}><span className="material-symbols-outlined">search</span></div>
        <div className={classes.imgContainer}>
        <img src="https://i.pinimg.com/736x/93/45/89/934589f3aa2f266b260de8bfeb3ae1ab.jpg" className={classes.userIconImage}></img>
        </div>
      </header>
      <div className={classes.dashboard}>
        {!isLoading ? (
          myDashboards.length > 0 ? (
            myDashboards.map(({ name, id, contents = [] }) => {
              return (
                <Bucket
                  title={name}
                  key={id}
                  dashKey={id}
                  loadDashboard={loadDashboard}
                >
                  {
                  contents.map(({ text, id ,title, comments,like,img,dashboardId}) => (
                    <Card loadDashboard={loadDashboard}
                    style={{backgroundColor:theme.colors.cards}}descr={text} key={id} title={title} comments={comments.length} like={like} id={id} imgLink={img} dashKey={dashboardId}/>
                  ))
                  }
                </Bucket>
              );
            })
          ) : error ? (
            <span>**Boom**</span>
          ) : (
            <span>Non ci sono Dashboard</span>
          )
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </>
  );
};

export default Dashboard;
