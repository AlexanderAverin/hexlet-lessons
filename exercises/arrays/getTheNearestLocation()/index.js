const getDistance = ([x1, y1], [x2, y2]) => {
  const xs = x2 - x1;
  const ys = y2 - y1;

  return Math.sqrt(xs ** 2 + ys ** 2);
};

const getDistanceArr = (locations, currentPoint) => {
  const iter = (acc, counter) => {
    if (counter === locations.length) {
      return acc;
    }
    const [, point] = locations[counter];
    return iter([...acc, getDistance(currentPoint, point)], counter += 1);
  };
  return iter([], 0);
};

const getTheNearestLocation = (locations, point) => {
  if (locations.length === 0) {
    return null;
  }
  const distanceArray = getDistanceArr(locations, point);
  return locations[distanceArray.indexOf(Math.min(...distanceArray))];
};
