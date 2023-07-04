import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  showCompose: false,
  mails: [],
  selectedMail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setCompose: (state) => {
      state.showCompose = !state.showCompose;
    },
    closeCompose: (state) => {
      state.showCompose = false;
    },
    setMails: (state, action) => {
      state.mails = action.payload;
    },
    setSelectedMail: (state, action) => {
      state.selectedMail = action.payload;
    },
    signOut: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const {
  setUser,
  setCompose,
  closeCompose,
  setMails,
  setSelectedMail,
  signOut,
} = userSlice.actions;
