import {DISK_DROPPED} from './../actions/action-types';

let gridMap = new Map();
gridMap.set(1, [0,0,0,0,0,0,0]);
gridMap.set(2, [0,0,0,0,0,0,0]);
gridMap.set(3, [0,0,0,0,0,0,0]);
gridMap.set(4, [0,0,0,0,0,0,0]);
gridMap.set(5, [0,0,0,0,0,0,0]);
gridMap.set(6, [0,0,0,0,0,0,0]);

const initialState = {
    grid: gridMap,
    player: 0,
    winner: null
};

const GameReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

        case DISK_DROPPED:
            let copyState = {};
            let x = action.x;
            let y = action.y;
            let pos = state.grid.get(x);
            if(action.player === 1) {
                pos[y] = 1;
                let newGrid = state.grid.set(x, pos);
                copyState = {
                    ...state,
                    grid: newGrid,
                    player: 2
                }
            } else if(action.player === 2) {
                pos[y] = 2;
                let newGrid = state.grid.set(x, pos);
                copyState = {
                    ...state,
                    grid: newGrid,
                    player: 1
                }
            }
            return copyState;
    };
};

export default GameReducer;