import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
import { httpGetDashboards } from "../api.http";

export const fetchDashboards = createAsyncThunk(
   "app/fetchDashboards",
   async () => {
      //async payload creator
      try {
         const { data } = await httpGetDashboards();
         return data;
      } catch (err) {
         console.log("error");
      }
   }
);


const appSlice = createSlice(
   {
      name: "app",
      initialState: { themeMode: 'lightTheme', dashboards: [] },
      reducers: {
         setThemeMode: (state, action) => {
            state.themeMode = action.payload;
         },
         setDashboards: (state, action) => {
            state.dashboards = action.payload;
         },
      },
      extraReducers: {
         [fetchDashboards.fulfilled]: (state, action) => {
            state.dashboards = action.payload;
         },
      }
   }
);


export const { setThemeMode, setDashboards } = appSlice.actions
export default appSlice.reducer

// 