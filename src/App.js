import React ,{useRef}from "react";
import "./App.css";
//import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";
import { ThemeProvider } from "react-jss";
import { themeList} from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { setThemeMode } from "./store/appSlice";
import { createUseStyles, useTheme } from "react-jss"
import { setErrorMessageAction, setErrorAction } from "./store/actions/errorActions";

const appStyle = createUseStyles((theme) => ({
  errorBanner : {
    backgroundColor: "#F8D7DA",
    color:"#9D1C24",
    border: "solid 1px #9D1C24",
    borderRadius: 8,
    width: 400,
    textAlign: "center",
    padding: "5px 0",
    position: "fixed",
    left: 0,
    right: 0,
    margin: "10px auto",
  },
  themeContainer : {
    paddingTop: 35,
  }

})) 

function App() { 

  const theme = useTheme();
  const classes= appStyle();

  const themeMode = useSelector((state) => state.app.themeMode)
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.error.errorDisplay)

  const themeRef = useRef({})
  const errorMessage = useSelector((state) => state.error.errorMessage)

const themeSelector = (value) => {

    switch (themeMode) {

      case "darkTheme":
        return themeList.darkTheme

      case "purpleTheme":
        return themeList.purpleTheme
      default:
        return themeList.lightTheme
    }
  }
  
  return (
    <div>
      {isError && 
      <div className={classes.errorBanner} role="alert">
        ERROR: {errorMessage}
      </div>
      }
      <div className={classes.themeContainer}>
        <select /* onChange={(e) => {
        dispatch(setThemeMode(e.target.value))}}  */ref={themeRef}>
        <option value="purpleTheme">PURPLETHEME</option>
        <option value="darkTheme">DARKTHEME</option>
        <option value="lightTheme">LIGHTTHEME</option>
      </select>
      <button onClick={() => {
        dispatch(setThemeMode(themeRef.current.value))
      }
      }> Bottone </button>
      <button onClick = {() => {
        dispatch(setErrorAction(!isError));
        dispatch(setErrorMessageAction("errore errore"))
        }
      }>ERRORE</button>
      </div>

      <ThemeProvider theme={themeList[themeMode]}>
        <Router basename="/">
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </div>
  );
}

const AppRoutes = () => {
  const myRoutes = useRoutes(routes);
  return myRoutes;
};

export default App;
