import { createSlice } from "@reduxjs/toolkit";

const storedToken = localStorage.getItem("token");

let initialToken = null;
try {
  initialToken = JSON.parse(storedToken);
} catch (error) {
  console.error("Error parsing token:", error);
}

const initialState = {
  signupData: null,
  loading: false,
  token: JSON.stringify(initialToken), // Stringify the token here
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setSignupData(state, value) {
      state.signupData = value.payload;
    },
    setLoading(state, value) {
      state.loading = value.payload;
    },
    setToken(state, value) {
      state.token = JSON.stringify(value.payload); // Stringify the token when setting
    },
  },
});

export const { setSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;
