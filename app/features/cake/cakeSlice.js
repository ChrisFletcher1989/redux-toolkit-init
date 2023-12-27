const createSlice = require("@reduxjs/toolkit").createSlice;
//CREATE INITIAL STATE
const initialState = {
  numOfCakes: 10,
};
//ACTIONS ARE AUTOMATICALLY MADE WHEN REDUCERS ARE ADDED TO THE OBJECT USING createSlice TOOLKIT
const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});
Module.exports = cakeSlice.reducer;
Module.exports.cakeActions = cakeSlice.actions;
