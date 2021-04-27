import React, { Component } from 'react'
import './Victory.jsx'
import Winner from "../assets/pic/winner.gif"

class Victory extends Component {

renderVictory() {
    if (this.state.player1Tokens.indexOf(false) === -1) {
      return (<div className="winner" >
        <p className="pWins"> <span className="spanP1">Player 1</span> Wins !</p>
        <div className="offset-3" style={{ background: `url(${Winner})`, height: `${500}px`, backgroundRepeat: "no-repeat" }} />
      </div>)
    } else if (this.state.player2Tokens.indexOf(false) === -1) {
      return (
        <div>{this.renderVictory()}</div>
      )
    }
  
  }
    }

    export default Victory