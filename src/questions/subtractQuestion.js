import { randInt } from './randInt.js';

export function gen() {
  var a = randInt(0, 1000);
  var b = randInt(0, 1000);
  var x = Math.min(a, b);
  var y = Math.max(a, b);
  var ans = x-y;
  return {question: y + '-' + x, answer: ans};
}
