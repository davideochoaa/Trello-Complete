const initialState = {
   errorDisplay : false,
   errorMessage : "",
};

const errorReducer = (state=initialState, action) => {
   switch(action.type) {
      case "error/setError":
         if(action.payload){
            return {...state, errorDisplay : action.payload};
         }else{
            return {...state, errorDisplay : action.payload, errorMessage: ""};
         }

      case "error/setErrorMessage":
         return {...state, errorMessage : action.payload}
      default: 
      return state
   }
/*    if(action.type === "error/setError"){
      //state.errorDisplay = action.payload
      return {...state, errorDisplay : action.payload}
   }
      return state */
};

export default errorReducer
