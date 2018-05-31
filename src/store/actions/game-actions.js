import {DISK_DROPPED} from './action-types';

export const diskDropped = (player, x, y) => {
    return {
        type: DISK_DROPPED,
        player: player,
        x: x,
        y: y
    };
};