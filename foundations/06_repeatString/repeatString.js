const repeatString = function(a, b) {
    result = ""
    if (b < 0) {
        return "ERROR"
    }
    for (i = 0; i < b; i++) {
        result += a
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
