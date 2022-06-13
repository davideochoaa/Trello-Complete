import { configureStore,combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import errorReducer from "./reducers/errorReducer";


const rootReducer = combineReducers({ 
   app: appReducer,
   error : errorReducer
}
)

const store = configureStore({
   reducer: rootReducer
});


export default store;