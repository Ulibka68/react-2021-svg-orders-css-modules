import { reducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer,
  preloadedState: {},
});

export type RootState = ReturnType<typeof reducer>;
