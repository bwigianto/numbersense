import * as add from './addQuestion.js';
import * as div25 from './div25.js';
import * as mult11 from './mult11.js';
import * as mult from './multQuestion.js';
import * as sub from './subtractQuestion.js';

export function randomQuestion() {
  var questions = [add.gen, div25.gen, mult11.gen, mult.gen, sub.gen];
  return questions[Math.floor(Math.random()*questions.length)]();
}
