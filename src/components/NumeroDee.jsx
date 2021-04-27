import React, { Component } from 'react'
import './NumeroDee.jsx'

class NumeroDee extends Component {
    render() {

        return (

        <div className="numeroDee" >


        <span className="spanP1">{this.state.numDee}</span>
        <i className="fas fa-chess-knight logo "></i>

        <span className="spanP2">{this.state.numDee2}</span>
        <p className="rainbow">Petit Chevaux</p>
    
      <div/>
        <button className={this.state.currentPlayer === 1 ? "b1" : "b2"} onClick={() => this.props.lancerDee(this.state.numDee, this.state.currentPlayer)}={this.lancerDee}>Tirer dée du jouer {this.state.currentPlayer}</button>
        
        
        )
    }

}

export default NumeroDee
