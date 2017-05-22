import React, { Component } from 'react';
import './App.css';
import { randomQuestion } from './questions/randomQuestion.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <Questions/>
        </p>
      </div>
    );
  }
}

class Questions extends Component {
  constructor(props) {
    super(props);
    var qa = randomQuestion();
    this.state = {value: '', question: qa.question, answer: qa.answer, status: '', correct: 0, total: 0};

  }

  updateQuestion(val, state) {
    var qa = randomQuestion();
    this.setState({value: val, question: qa.question, answer: qa.answer, status: state, correct: state === 'Correct!' ? this.state.correct+1: this.state.correct, total: this.state.total + 1});
  }

  handleChange(event) {
    this.setState({value: event.target.value, question: this.state.question, answer: this.state.answer, status: this.state.status});
  }

  handleSubmit(event) {
    var state = 'Wrong';
    if (parseInt(this.state.value, 10) === parseInt(this.state.answer, 10)){
      state = 'Correct!';
    }
    this.updateQuestion('', state);
    
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          {this.state.question}
        </div>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
          <div class="label-text"></div>
        </label>
        <div>
          {this.state.status}
        </div>
        <br/>
        <div>{this.state.correct}/{this.state.total}</div>
      </form>
    );
  }
}

export default App;
