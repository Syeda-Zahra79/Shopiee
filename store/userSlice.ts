import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: typeof window !== 'undefined'  ? JSON.parse(localStorage.getItem("user_data") as any) 
    : {
        user_name: "",
        email: "",
        f_name: "",
        l_name: "",
        phone: "",
        password:"",
        rememberMe: false,
        country: "",
        city: "",
        address: "",
        creditFlag: "",
        CODFlag: "",
      },
};

const userSlice = createSlice({
  name: "user_data",
  initialState,
  reducers: {
    addUserDetails: (state, { payload }) => {
   
      let driveObj = {};
      
      for (const [stateKey, stateValue] of Object.entries(state.user)) {
              
        if (payload.hasOwnProperty(stateKey) && payload[stateKey] !== '') {
          
          Object.assign(driveObj, {[stateKey] : payload[stateKey]})
          
        } else {
          Object.assign(driveObj, {[stateKey] : stateValue})
        }
       
    }
    state.user = driveObj;


      localStorage.setItem("user_data", JSON.stringify(state.user));
    }
  },
});

export const { addUserDetails } = userSlice.actions;

export default userSlice.reducer;
