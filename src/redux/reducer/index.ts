import { combineReducers } from "redux";
import { nameReducer } from "@/redux/reducer/name";
import { nextMove } from "@/redux/reducer/nextmove";
import { lifeStateSlice } from "@/redux/reducer/state_logic_reducer";

export const reducer = combineReducers({
  name: nameReducer,
  move: nextMove.reducer,
  lifeState: lifeStateSlice.reducer,
});

export type RootState = ReturnType<typeof reducer>;
