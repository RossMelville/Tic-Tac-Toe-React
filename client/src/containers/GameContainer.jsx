import React, {Component} from 'react';
import Board from '../components/Board.jsx';
import Square from '../components/Square.jsx';

class GameContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
    turn: 1,
    winningCombos: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]],
    result: "turn",
    player: "Player",
    selectedPositions: Array(9).fill(null)
    };
    this.checkForWin = this.checkForWin.bind(this)
  }


  reset(){
    this.setState({
      turn: 1,
      winningCombos: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]],
      result: "turn",
      player: "Player",
      selectedPositions: Array(9).fill(null)
    }) 
    
  }

  playerPlayed (index) {
    if(this.state.selectedPositions[index] != null){
      return
    }
    var positions = this.state.selectedPositions;
    if(this.state.turn === 1){
      positions[index] = "X"
    } else {
      positions[index] = "O"
    }
    this.setState({selectedPositions: positions});
    this.changeTurn(this.checkForWin, positions)
  }

  changeTurn(callback, data){
    if(this.state.turn === 1){
      this.setState( { turn: 2 } )
    } else {
      this.setState( { turn: 1 } )
    }
    callback(data);
    return
  }

  confirmWin(data){
    this.setState( data )
    return
  }

  checkForWin(data) {
      for (var i = 0; i < this.state.winningCombos.length; i++) {
        var index1 = this.state.winningCombos[i][0];
        var index2 = this.state.winningCombos[i][1];
        var index3 = this.state.winningCombos[i][2];
        if(data[index1] === null || data[index2] === null || data[index3] === null){   
        } else if
          (data[index1] === data[index2] && data[index1] === data[index3]){
          this.confirmWin({ player: "Player", turn: this.state.turn, result: "wins!" });
        } else if
          (this.state.selectedPositions.includes(null) != true && (data[index1] != data[index2] || data[index1] != data[index3])){
          this.confirmWin({ player: "It's a DRAW!!", result: "", turn: ""});         
        }else if
        (data[index1] != data[index2] || data[index1] != data[index3]) {          
        } 
      }
    }

  render() {
    return (
      <section className="game">
        <p className="title">Welcome to Tic-Tac-Toe</p>
        <br/>
        <p className="status">{this.state.player}  {this.state.turn}  {this.state.result}</p>
        <br/>
        <Board className="board" playerPlayed={this.playerPlayed.bind(this)} selectedPositions={this.state.selectedPositions}/>
        <br/>
        <button className="reset" onClick={this.reset.bind(this)}>Reset Game</button>
      </section>
    )
  }


}

export default GameContainer
