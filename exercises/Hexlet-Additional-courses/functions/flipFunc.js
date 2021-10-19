const flip = (func) => (a, b) => func(b, a);

const sub = (a, b) => a - b;

const flipSub = flip(sub);

