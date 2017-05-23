import * as t1 from './add2-4digit.js';
import * as t2 from './div25.js';
import * as t3 from './mult11.js';
import * as t4 from './multQuestion.js';
import * as t5 from './multDigitFlip.js';
import * as t6 from './subtractQuestion.js';
import * as t7 from './mod.js';
import * as t8 from './mult101.js';

export function randomQuestion() {
  var questions = [t1.gen, t2.gen, t2.gen, t3.gen, t4.gen, t5.gen, t6.gen, t7.gen, t8.gen];
  return questions[Math.floor(Math.random()*questions.length)]();
}
