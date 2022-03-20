const If = (f) => f;

const True = (first) => (second) => first;

const False = (first) => (second) => second;

const ConditionFunction = If(True);
console.log(ConditionFunction('one')('two'));
