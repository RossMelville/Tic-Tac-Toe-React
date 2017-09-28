import React, {Component} from 'react';

class Square extends Component {

  constructor(props) {
    super(props);
  }

  handleClick(event){
    var index = Math.floor(this.props.id);
    this.props.playerPlayed(index);
  }

  

  render(){
    return(
      <button className="button" onClick={this.handleClick.bind(this)} >
        {this.props.selectedPositions[this.props.id]} 
      </button>
    )
  }

}

export default Square;
