import React from 'react';

class States extends React.component {
render() {
    return (
        
      {this.props.map((key) => <div>
        
      {this.props.numDee}
      {this.props.numDee2}
      {this.props.numCase}
      {this.props.numCase2}
    </div>)
    }
      }
    }
export default States