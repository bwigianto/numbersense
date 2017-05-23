import { randInt } from './randInt.js';

export function gen(){
  var a = randInt(11, 99);
  var flipped = (a % 10) * 10 + Math.floor(a/10);
  var ans = a*flipped;
  return {question: a + '*' + flipped, answer: ans};
}
