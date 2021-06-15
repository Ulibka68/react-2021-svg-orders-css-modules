import { combineReducers } from "redux";
import { nameReducer } from "@/redux/reducer/name";
import { nextMove } from "@/redux/reducer/nextmove";
import { ordersStateSlice } from "components/top-form/order-form-reducer";

export const reducer = combineReducers({
  name: nameReducer,
  move: nextMove.reducer,
  ordersState: ordersStateSlice.reducer,
});
