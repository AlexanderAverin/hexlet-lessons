function Point(x, y) {
  return function f(fn) {
    return fn(x, y);
  };
}

function Segment(beginPoint, endPoint) {
  return function f(fn) {
    return fn(beginPoint, endPoint);
  };
}

const getBeginPoint = (segment) => segment((begin) => begin);

const getEndPoint = (segment) => segment((begin, end) => end);

const point = new Point(1, 2);

const car = (pair) => pair((x, y) => x);

console.log(car(point));
