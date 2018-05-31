import React from 'react';
import GameBoardComponent from "../game-board/GameBoardComponent";
import {connect} from 'react-redux';
import {diskDropped} from './../../store/actions/index';

class HomeComponent extends React.Component {
    diskPressed = (x, y) => {
        console.log(this.props.grid);
        this.props.diskDropped(this.props.player, x, y);
        console.log(this.props.grid);
    };
    render() {
        return(
            <div>
                <h1>Connect Four</h1>
                <GameBoardComponent onDiskPress={this.diskPressed}/>
            </div>
        );
    }
}

const stateToProps = state => {
    return {
        grid: state.game.grid,
        player: state.game.player,
        winner: state.game.winner,
    }
};

const dispatchToProps = dispatch => {
    return {
        diskDropped: (player, x, y) => dispatch(diskDropped(player, x, y))
    };
};

export default connect(stateToProps, dispatchToProps)(HomeComponent);