import { randInt } from './randInt.js';

export function gen() {
  var a = randInt(1000, 10000);
  var b = randInt(1, 20);
  var ans = a%b;
  return {question: a + '/' + b + ' has a remainder of' , answer: ans};
}
