import { createSlice,  SliceCaseReducers} from "@reduxjs/toolkit";

type nextMoveState = "x" | "o";

const defaultStatenextMove: nextMoveState = "x";


type nextMoveSliceReducerOptionType = SliceCaseReducers<nextMoveState>;

export const nextMove = createSlice<nextMoveState,nextMoveSliceReducerOptionType>({
    name: 'nextMove',
    initialState:defaultStatenextMove,
    reducers:{
        oMove(state,action) {
            return "x";
        },
        xMove(state,action) {
            return "o";
        },
    }
});

// console.log('nextMove.actions : ', nextMove.actions);

/*
type GameFieldState = string[][];

const defaultState: GameFieldState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
];

export const gameField = createReducer<GameFieldState>(defaultState, {
    [actions.xMove.type]: (state, action) => {
        state[action.payload.y][action.payload.x] = "o";
        return state;
    },
    [actions.oMove.type]: (state, action) => {
        state[action.payload.y][action.payload.x] = "x";
        return state;
    },
});

 */