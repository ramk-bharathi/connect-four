import React from 'react';
import './game-board.css';

class GameBoardComponent extends React.Component {
    buttonAction = (x, y) => {
        this.props.onDiskPress(x, y);
    };
    render() {
        return(
            <div>
                <div>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(1, 1)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(1, 2)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(1, 3)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(1, 4)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(1, 5)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(1, 6)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(1, 7)}></button>
                </div>
                <div>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(2, 1)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(2, 2)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(2, 3)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(2, 4)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(2, 5)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(2, 6)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(2, 7)}></button>
                </div>
                <div>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(3, 1)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(3, 2)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(3, 3)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(3, 4)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(3, 5)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(3, 6)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(3, 7)}></button>
                </div>
                <div>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(4, 1)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(4, 2)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(4, 3)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(4, 4)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(4, 5)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(4, 6)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(4, 7)}></button>
                </div>
                <div>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(5, 1)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(5, 2)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(5, 3)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(5, 4)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(5, 5)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(5, 6)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(5, 7)}></button>
                </div>
                <div>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(6, 1)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(6, 2)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(6, 3)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(6, 4)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(6, 5)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(6, 6)}></button>
                    <button className={`circular-btn ${this.props.button_class}`} onClick={(x, y) => this.buttonAction(6, 7)}></button>
                </div>
            </div>
        );
    }
}

export default GameBoardComponent;