import React from "react";
import './App.css'
import Circle from "./components/Circle.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
import Victory from "./components/Victory.jsx";
import Containers from "./components/Containers.jsx";
import NumeroDee from "./components/NumeroDee";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      numDee: 0,
      numDee2: 0,
   
    }

      this.state = {
      numCase: 0,
      numCase2: 0,
      player1Tokens: [false, false, false, false],
      player2Tokens: [false, false, false, false],
      currentPlayer: 1
     

    }

    this.lancerDee = this.lancerDee.bind(this)
    this.renderVictory = this.renderVictory.bind(this)
    this.elseVictory = this.elseVictory.bind(this)
    
  }




  lancerDee() {
    const dee = Math.floor(Math.random() * 6 + 1)
    console.log("numDEE :", dee);

    const player = this.state.currentPlayer

    if (player === 1) {

      if (this.state.numCase !== 0 || dee === 6) {
        this.setState({
          numDee: dee,
          numCase: this.state.numCase + dee,
          currentPlayer: 2
        })
      } else {
        this.setState({
          numDee: dee,
          currentPlayer: 2
        })
      }


    } else if (player === 2) {

      if (this.state.numCase2 !== 0 || dee === 6) {
        this.setState({
          numDee2: dee,
          numCase2: this.state.numCase2 + dee,
          currentPlayer: 1
        })
      } else {
        this.setState({
          numDee2: dee,
          currentPlayer: 1
        })
      }

    }
  }

  render() {
    return(
      <NumeroDee onClick={() => this.lancerDee()} />
    )
  }
  
elseVictory() {
  return (

    <div className=" bg-g">
      <div className="offset-2 py-4">
        <div id="jeu">

          <div className="grid-game">

            {this.renderCircles(1, 1)}

            <div className="flex">
              {this.renderCircles(2, 9)}
            </div>

            {this.renderCircles(10, 10)}

            <div className="flex grid-item-4">
              {this.renderCircles(29, 36)}
            </div>

            <div className="flex grid-item-5">
            <div>

              <Containers />                  
              </div>

              <div>
                <NumeroDee />
              </div>

            </div>

            <div className="flex grid-item-6">
              {this.renderCircles(11, 18)}
            </div>

            {this.renderCircles(28, 28)}

            <div className="flex grid-item-8">
              {this.renderCircles(20, 27)}
            </div>

            {this.renderCircles(19, 19)}

          </div>

        </div>
      </div>
    </div>
  )
}
}

  renderCircles(n, p) {
    let circlesArray = []

    for (let index = n; index <= p; index++) {


      if (this.state.numCase2 === index) {
        circlesArray.push(<Circle key={index} circleColor="#ec4444" />)
      } else if (this.state.numCase === index) {
        circlesArray.push(<Circle key={index} circleColor="#4480ec" />)
      } else {
        circlesArray.push(<Circle key={index} circleColor="black" />)
      }

      if (this.state.numCase > 37) {
        const arrayTokens = [...this.state.player1Tokens]
        const indexFirstFalse = arrayTokens.indexOf(false)

        arrayTokens[indexFirstFalse] = true

        this.setState({

          numCase: 1,
          player1Tokens: arrayTokens
        })
      } else if (this.state.numCase2 > 37) {
        const arrayTokens2 = [...this.state.player2Tokens]
        const indexSecondFalse = arrayTokens2.indexOf(false)

        arrayTokens2[indexSecondFalse] = true

        this.setState({
          numCase2: 1,
          player2Tokens: arrayTokens2

        })

      }

    }

    return circlesArray
  }

  renderVictory() {
     if (this.state.player1Tokens.indexOf(false) === -1)
     return (
       <div>
         <Victory />
         </div>
     )
     } else if (this.state.player2Tokens.indexOf(false) === -1) {
      return (
        <div>{this.renderVictory()}</div>
      )
    } else {
     return (
       <div>
        {this.elseVictory()}
       </div>
     )
    }

  render() {

    return (
      <Victory />
    )
  }

}



export default App

