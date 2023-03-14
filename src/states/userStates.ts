import { createSlice } from "@reduxjs/toolkit";

export const userStates = createSlice({
  name: "geralState",
  initialState: {
    userLoged: true,
  },
  reducers: {
    setUserLoged: (state) => {
      state.userLoged = true;
    },
    setUserLogout: (state) => {
      state.userLoged = false;
    },
  },
});

export const { setUserLoged, setUserLogout } = userStates.actions;
