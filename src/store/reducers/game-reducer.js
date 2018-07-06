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
    player: 1,
    winner: null,
    button_class: 'burlywood-btn'
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
            if(action.player == 1) {
                pos[y-1] = 1;
                let newGrid = state.grid.set(x, pos);
                copyState = {
                    ...state,
                    grid: newGrid,
                    player: 2,
                    button_class: 'red-btn'
                }
            } else if(action.player == 2) {
                pos[y-1] = 2;
                let newGrid = state.grid.set(x, pos);
                copyState = {
                    ...state,
                    grid: newGrid,
                    player: 1,
                    button_class: 'blue-btn'
                }
            }
            return copyState;
    };
};

export default GameReducer;