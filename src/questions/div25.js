import { randInt } from './randInt.js';

export function gen() {
  var a = randInt(100, 2000);
  var dividend = 5 * a;
  var ans = dividend/25;
  return {question: dividend + '/25', answer: ans};
}
