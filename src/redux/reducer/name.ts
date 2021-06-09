import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "userName",
  initialState: "",
  reducers: {
    set: (_, action: PayloadAction<string>) => action.payload,
    clear: () => "",
  },
});

export const nameActions = nameSlice.actions;
export const nameReducer = nameSlice.reducer;
