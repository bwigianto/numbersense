import { randInt } from './randInt.js';

export function gen(){
  var a = randInt(101, 1000);
  var b = 101;
  var ans = a*b;
  return {question: a + '*' + b, answer: ans};
}
