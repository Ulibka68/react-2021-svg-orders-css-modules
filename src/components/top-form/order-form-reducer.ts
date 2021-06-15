import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";

interface OrderState {
  orderDate: Date;
  orderNumber: number;
  kantColor: string;
  kantWidth: number;
  podvesCounts: number;
  podvesLength: number;
  width: number;
  height1: number;
  height2: number;
  dividerWidth: number;
  leftDownToCenterDistance: number;
  production_type: WindowVariant;
  horizontalDivider: boolean;
  verticalDivider: boolean;
  clientId: number;
  clientName: string;
}

export const production_type = {
  blindWindow: "Глухое окно",
  openingWindow: "Открывающееся окно",
  door: "Дверь",
};
type WindowVariant = keyof typeof production_type;

export type OrderStates = Array<OrderState>;

const defaultOrdersState: OrderStates = [
  {
    orderDate: new Date(Date.parse("2021-05-01")),
    orderNumber: 25,
    kantColor: "красный",
    kantWidth: 5,
    podvesCounts: 4,
    podvesLength: 40,
    width: 400,
    height1: 350,
    height2: 450,
    dividerWidth: 10,
    leftDownToCenterDistance: 10,
    production_type: "door",
    horizontalDivider: true,
    verticalDivider: false,
    clientId: 451,
    clientName: "Вася",
  },
];

export const ordersStateSlice = createSlice<
  OrderStates,
  SliceCaseReducers<OrderStates>
>({
  name: "ordersState",
  initialState: defaultOrdersState,
  reducers: {
    initState(
      state,
      action: PayloadAction<{
        sizex: number;
        sizey: number;
      }>
    ) {
      return state;
    },
  },
});

export const { initState } = ordersStateSlice.actions;
