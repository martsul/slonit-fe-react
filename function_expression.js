const additionOperation = function (a, b) {
  return a + b;
};

const subtractionOperation = function (a, b) {
  return a - b;
};

const multiplicationOperation = function (a, b) {
  return a * b;
};

const divisionOperation = function (a, b) {
  return a / b;
};

const operations = {
  add: additionOperation,
  subtract: subtractionOperation,
  multiply: multiplicationOperation,
  divide: divisionOperation,
};

const calculate = function (a, b, operation) {
  return operation(a, b);
};
