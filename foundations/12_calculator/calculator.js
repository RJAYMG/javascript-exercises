const add = function(a , b) {
  return a + b;
};

const subtract = function(a , b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((a, c) => a + c, 0)
};

const multiply = function(arr) {
  return arr.reduce((a, c) => a * c, 1)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
  const numbers = []
	for (let i=num; i>0; i--) {
    numbers.push(i)
  }
  return numbers.reduce((a,c) => a * c, 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
