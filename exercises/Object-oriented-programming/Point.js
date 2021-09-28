function getX() {
  return this.x;
}

function getY() {
  return this.y;
}

function Point(x, y) {
  this.x = x;
  this.y = y;
  this.getX = getX;
  this.getY = getY;
}

function getBeginPoint() {
  return this.beginPoint;
}

function getEndPoint() {
  return this.endPoint;
}

function Segment(beginPoint, endPoint) {
  this.beginPoint = beginPoint;
  this.endPoint = endPoint;
  this.getBeginPoint = getBeginPoint;
  this.getEndPoint = getEndPoint;
}

const reverse = (segment) => {
  const reverseSegment = new Segment(
    segment.getEndPoint(),
    segment.getBeginPoint(),
  );
  return reverseSegment;
};

const point1 = new Point(1, 2);
const point2 = new Point(2, 4);

const segment = new Segment(point1, point2);

console.log(point1);
