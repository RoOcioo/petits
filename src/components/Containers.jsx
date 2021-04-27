import React, { Component } from 'react'
import './Containers.jsx'
import './Circle.jsx'

class Containers extends Component {
    render() {
        return (
  
                <div className="containerP1">
                    <div className="divchildP1">
                      <div >
                        {this.props.circleColor}={this.props.player1Tokens[0] ? "#4646e8" : "black"} 
                        {this.props.circleColor}={this.props.player1Tokens[1] ? "#4646e8" : "black"} 
                      <div/>

                      <div >
                      {this.props.circleColor}={this.props.player1Tokens[2] ? "#4646e8" : "black"} 
                      {this.props.circleColor}={this.props.player1Tokens[3] ? "#4646e8" : "black"} 
                      </div>
                    </div>
                  </div>
        

<div className="containerP2">
                    <div className="divchildP2">
                      <div >
                      {this.props.circleColor}={this.state.player2Tokens[0] ? "#c30c0c" : "black"} 
                      {this.props.circleColor}={this.state.player2Tokens[1] ? "#c30c0c" : "black"} 
                      </div>

                      <div >
                      {this.props.circleColor}={this.state.player2Tokens[2] ? "#c30c0c" : "black"} 
                      {this.props.circleColor}={this.state.player2Tokens[3] ? "#c30c0c" : "black"} 
                      </div>
                    </div>
                  </div>
                  </div>
        )
    }
}

export default Containers;
