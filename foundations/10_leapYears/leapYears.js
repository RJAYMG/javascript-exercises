const leapYears = function(number) {
    if (number % 400 === 0) {return true}
    if (number % 100 === 0) {return false}
    if (number % 4 === 0) {return true}
    else {return false}
};

console.log(leapYears(1900))
// Do not edit below this line
module.exports = leapYears;
