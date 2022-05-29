import { createSlice } from '@reduxjs/toolkit';

// redux slice for project state
const initialState = {
  value: [],
};

export const counterSlice = createSlice({
  name: 'projectsSlice',
  initialState,
  reducers: {
    //   reducer for setting initial state, will be called when db query is done and set state to query results
    setInitial: (state, action) => {
      state.value = action.payload;
    },
    // reducer to add a project, push action.payload to state project array
    addProject: (state, action) => {
      state.value.push(action.payload);
    },
    editProject: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
