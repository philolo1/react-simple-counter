import React from 'react';
import ReactDOM from 'react-dom';

var Counter = React.createClass({
  getInitialState: function() {
    return {counter: 0};
  },
  increaseCounter: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },
  render: function() {
    return (
      <div>
        <div> {this.state.counter} </div>
        <button onClick={this.increaseCounter}> Add </button>
      </div>
    );
  }
});

ReactDOM.render(<Counter />, document.getElementById('app'));
