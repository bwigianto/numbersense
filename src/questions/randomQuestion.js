import * as add from './addQuestion.js';
import * as mult from './multQuestion.js';
import * as sub from './subtractQuestion.js';

export function randomQuestion() {
  var questions = [add.gen, mult.gen, sub.gen];
  return questions[Math.floor(Math.random()*questions.length)]();
}
