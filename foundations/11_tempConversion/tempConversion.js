const convertToCelsius = function(number) {
  const convertCelsius = (number - 32)*(5/9)
  const round = parseFloat(convertCelsius.toFixed(1))
  return round
};

const convertToFahrenheit = function(number) {
  const convertFahrenheit = (number)*(9/5)+32
  const round = parseFloat(convertFahrenheit.toFixed(1))
  return round
};


console.log(convertToCelsius(32))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
