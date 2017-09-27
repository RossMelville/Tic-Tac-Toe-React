import React, {Component} from 'react';
import Board from '../components/Board.jsx';
import Square from '../components/Square.jsx';

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      turn: 1,
      winningCombos: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    }
  }

  changeTurn(data){
    if(this.state.turn === 1){
      this.setState( { turn: 2 } )
    } else {
      this.setState( { turn: 1 } )
    }
    this.checkForWin(data);
  }

  checkForWin(data) {
    console.log(data)
    for (var i = 0; i < this.state.winningCombos.length; i++) {
      var index1 = this.state.winningCombos[i][0];
      var index2 = this.state.winningCombos[i][1];
      var index3 = this.state.winningCombos[i][2];
      if(data[index1] === null || data[index2] === null || data[index3] === null){
        console.log("null detected")
      } else if
        (data[index1] == data[index2] && data[index1] == data[index3]){
        console.log("Player Wins")
      } else {
        console.log("no match")
      }
    }
  }


  render() {
    return (
      <section className="game">
        Welcome to Tic-Tac-Toe<br/>
        Player {this.state.turn} turn
        <Board turn={this.state.turn} changeTurn={this.changeTurn.bind(this)}/>
      </section>
    )
  }


}

export default GameContainer