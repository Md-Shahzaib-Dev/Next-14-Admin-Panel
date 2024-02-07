import { createSlice } from "@reduxjs/toolkit";

export const reducer = createSlice({
  name: "appReducer",
  initialState: {
    user: null,
    isLogged: false,
    openMenu: true,
    loader: false,
    toast: { message: "", open: false, type: "success" },
    timezone: "America/New_York",
  },

  reducers: {
    setUser: (state, { payload }) => {
      state.isLogged = true;
      state.user = payload;
    },
    setLogged: (state) => {
      state.isLogged = true;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isLogged = false;
    },
    toggleMenu: (state) => {
      state.openMenu = !state.openMenu;
    },
    handleLoader: (state, { payload }) => {
      state.loader = payload;
    },
    setToast: (state, { payload }) => {
      state.toast = { ...payload, open: true };
    },
    removeToast: (state, { payload }) => {
      state.toast = { message: "", open: false, type: "success" };
    },
  },
});

export const { setLogged, setToast, setUser, logoutUser, handleLoader, removeToast, toggleMenu, setTimezone } = reducer.actions;

export default reducer.reducer;
