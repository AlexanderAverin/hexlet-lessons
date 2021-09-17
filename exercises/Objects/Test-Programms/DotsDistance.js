const DotsDistance = ([x1, y1], [x2, y2]) => {
  const dist_2 = (x1 - x2) ** 2 + (y1 - y2) ** 2;
  const dist = Math.sqrt(dist_2);
    return dist;
};
console.log(DotsDistance([4, 1], [0, 4]));