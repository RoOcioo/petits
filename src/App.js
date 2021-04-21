import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Circle from "./components/Circle.jsx"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      numCase: 0,
      numCase2: 0,
      player1Tokens: [false, false, false, false]
      
    }

    this.lancerDee = this.lancerDee.bind(this)
    this.renderVictory = this.renderVictory.bind(this)
  }

 
  lancerDee() {
    const dee = Math.floor(Math.random() * (6 - 1)) + 1;
    console.log("numDEE :",dee);
    
    this.setState({
      numDee: dee,
      numCase: this.state.numCase + dee
    })
   
  }
    // lancerDee2() {
    //   const dee2 = Math.floor(Math.random() * (6 - 1)) + 1;

    //   this.setState({
    //     numDee2: dee2,
    //     numCase2: this.state.numCase2 + dee2
    //   })
    // }



  // Bonus
  // go() {
  //   if (dee === 6) {


  //   } else {
  //     window.alert("noob")
  //   }
  // }

  renderCircles(n, p) {
    let circlesArray = []

    for (let i = 0; i < 4; i++) {

      for (let index = n; index <= p; index++) {
        circlesArray.push(<Circle circleColor={this.state.numCase == index ? "white" : "black"} />)

        if (this.state.numCase > 37) {
          // console.log(circlesArray[37]);

          const arrayTokens = [...this.state.player1Tokens]
          const indexFirstFalse = arrayTokens.indexOf(false)

          arrayTokens[indexFirstFalse] = true

          this.setState({
            numCase: 0,
            player1Tokens: arrayTokens
          })
        }
        //  console.log(this.state.numCase);
      }
    
      //  console.log(this.state.numCase);
     
      return circlesArray
    }
  }
  renderVictory() {
    if ( this.state.player1Tokens.indexOf (false) === -1 ) {
     return(<div>
       <h1>Winner</h1>
     </div>)}else{
       return  (
        <div>
          <div id="jeu">
            <div id="col1">
              {this.renderCircles(1, 10)}
            </div>

            <div id="col2">
              {this.renderCircles(11, 18)}
            </div>

            <div id="col3">
              {this.renderCircles(19, 28)}
            </div>

            <div id="col4">
              {this.renderCircles(29, 36)}
            </div>

            <div className="containerP1">
              <div className="divchildP1">
                <div >
                  {/* {this.renderCircles(37,3)} */}
                  {/* <i class="fas fa-circle" style={{color: this.state.numCase > 37 ? "white" : "black"}}></i> */}

                  <Circle circleColor={this.state.player1Tokens[0] /* === true */ ? "white" : "black"} />
                  <Circle circleColor={this.state.player1Tokens[1] /* === true */ ? "white" : "black"} />

                  {/* <i class="fas fa-circle" style={{ color: this.state.numCase >= 37 ? "white" : "black" }}></i> */}
                  {/* <i class="fas fa-circle" style={{ color: this.state.numCase > 74 ? "white" : "black" }}></i> */}

                </div>

                <div >
                  <Circle circleColor={this.state.player1Tokens[2] /* === true */ ? "white" : "black"} />
                  <Circle circleColor={this.state.player1Tokens[3] /* === true */ ? "white" : "black"} />
                </div>
              </div>

             

            </div>

            <div className="containerP2">
              <div className="divchildP2">
                <div >
                  {/* <i class="fas fa-circle" style={{color: this.state.numCase == 1 ? "white" : "black"}}></i>
          <i class="fas fa-circle" style={{color: this.state.numCase == 2 ? "white" : "black"}}></i> */}

                </div>

                <div >
                  {/* <i class="fas fa-circle" style={{color: this.state.numCase == 11 ? "white" : "black"}}></i>
          <i class="fas fa-circle" style={{color: this.state.numCase == 12 ? "white" : "black"}}></i> */}
                </div>
              </div>
            </div>

          

            <p className="numeroDee"> {this.state.numDee} </p>
          



          </div>

          <div>
            <button className="b1  " onClick={this.lancerDee}>Player 1</button>
            <p></p>
          </div>
          <div>
            <button className="b2" onClick={this.lancerDee2}>Player 2</button>
            <p></p>
          </div>

          {/* <div>
          <button onClick={this.lancerDee}>Lancer le Dé</button>
          <p></p>
      </div> */}
        </div>
      )
     }
    }

      render() {


        console.log("this.state.numCase", this.state.numCase);
        console.log("index of", this.state.player1Tokens.indexOf(false));

        return (
          <div>{this.renderVictory()}</div>
        )
      }

    } 
  


export default App

