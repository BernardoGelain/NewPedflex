import { createSlice, Slice } from "@reduxjs/toolkit";

export type CartSliceState = {
  testState: any;
};

const cartSlice: Slice<CartSliceState> = createSlice({
  name: "cart",
  initialState: {
    testState: [],
  },

  //reducers para manipular estado
  reducers: {
    test: (state, action) => {
      state.testState.push(action.payload.testDispatch);
    },
    removeTest: (state) => {
      state.testState.pop();
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { test, removeTest } = cartSlice.actions;
