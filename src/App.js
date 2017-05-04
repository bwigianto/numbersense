import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Questions/>
        </p>
      </div>
    );
  }
}

var RandomSubtractionQuestion = {
  randInt: function(a, b) {
    return Math.floor(Math.random() * (b+1)) + a;
  },
  gen: function() {
    var a = this.randInt(0, 1000);
    var b = this.randInt(0, 1000);
    var x = Math.min(a,b);
    var y = Math.max(a,b);
    var ans = y - x;
    return {question: y + '-' + x, answer: ans};
  }
};

class Questions extends Component {
  constructor(props) {
    super(props);
    var qa = RandomSubtractionQuestion.gen();
    this.state = {value: '', question: qa.question, answer: qa.answer, status: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nextQuestion(val) {
    var qa = RandomSubtractionQuestion.gen();
    this.setState({value: val, question: qa.question, answer: qa.answer, status: ''});
  }

  handleChange(event) {
    this.setState({value: event.target.value, question: this.state.question, answer: this.state.answer, status: this.state.status});
  }

  handleSubmit(event) {
    var state = 'Wrong';
    if (parseInt(this.state.value, 10) === parseInt(this.state.answer, 10)){
      state = 'Correct!';
    this.setState({value: event.target.value, question: this.state.question, answer: this.state.answer, status: state});
      this.nextQuestion('');
    }
    
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          {this.state.question}
        </label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
        <div>
          {this.state.status}
        </div>
      </form>
    );
  }
}

export default App;
