import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Questions/>
        </p>
      </div>
    );
  }
}

var randInt = function(a, b) {
  return Math.floor(Math.random() * (b+1)) + a;
};

var RandomAddQuestion = {
  gen: function() {
    var a = randInt(0, 1000);
    var b = randInt(0, 1000);
    var x = Math.min(a, b);
    var y = Math.max(a, b);
    var ans = x+y;
    return {question: y + '+' + x, answer: ans};
  }
};

var RandomMultiQuestion = {
  gen: function() {
    var a = randInt(0, 1000);
    var b = randInt(0, 1000);
    var x = Math.min(a, b);
    var y = Math.max(a, b);
    var ans = x*y;
    return {question: y + '*' + x, answer: ans};
  }
};

var RandomSubtractionQuestion = {
  gen: function() {
    var a = randInt(0, 1000);
    var b = randInt(0, 1000);
    var x = Math.min(a,b);
    var y = Math.max(a,b);
    var ans = y - x;
    return {question: y + '-' + x, answer: ans};
  }
};

var randomQuestion = function() {
  var questions = [RandomAddQuestion.gen, RandomMultiQuestion.gen, RandomSubtractionQuestion.gen];
  return questions[Math.floor(Math.random()*questions.length)]();
}

class Questions extends Component {
  constructor(props) {
    super(props);
    var qa = randomQuestion();
    this.state = {value: '', question: qa.question, answer: qa.answer, status: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateQuestion(val, state) {
    var qa = randomQuestion();
    this.setState({value: val, question: qa.question, answer: qa.answer, status: state});
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
      <form onSubmit={this.handleSubmit}>
        <div>
          {this.state.question}
        </div>
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
