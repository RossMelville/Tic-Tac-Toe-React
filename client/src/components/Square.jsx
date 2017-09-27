import React, {Component} from 'react';

class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: "-"
    }
  }

handleClick(event){
  if(this.state.display!= "-"){
    return
  }
  
}

  render(){
    return(
      <button onClick={this.handleClick.bind(this)} >
        {this.state.display}
      </button>
      )
  }

}

export default Square;