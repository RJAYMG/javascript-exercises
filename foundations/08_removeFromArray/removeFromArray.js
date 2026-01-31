const removeFromArray = function(arr, ...forbiddenNumber) {
    return arr.filter(value => !forbiddenNumber.includes(value))
};
// Do not edit below this line
module.exports = removeFromArray;
