import { cons, car, cdr, isPair, toString } from '@hexlet/pairs';

const reversePair = (pair) => cons(cdr(pair), car(pair));

const sumOfPairs = (pair1, pair2) => cons(
  car(pair1) + car(pair2),
  cdr(pair1) + cdr(pair2),
);

const findPrimitiveBox = (pair) => {
  if (isPair(car(pair)) === false && isPair(cdr(pair)) === false) {
    return pair;
  }
  return isPair(car(pair)) === true ? findPrimitiveBox(car(pair)) : findPrimitiveBox(cdr(pair));
};
