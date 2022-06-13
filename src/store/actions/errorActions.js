export const setErrorAction = (payload) => ({
   type: "error/setError",
   payload
})

export const setErrorMessageAction = (payload) => ({
   type: "error/setErrorMessage",
   payload 
})

export const setDashboards = (payload) => ({
   type: "app/setDashboards",
   payload : payload,
})