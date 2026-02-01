const sumAll = function(start, end, step=1) {
    const result = [];
    if (start < 0 || end < 0) {
        return "ERROR"
    }

    if (!(Number.isInteger(start)) || !(Number.isInteger(end))) {
        return "ERROR"
    }

    if (start < end) {
        for (i = start; i <= end; i += step) {
        result.push(i);
        }
    } else {
        for (i = end; i <= start; i += step) {
        result.push(i);
        }
    }

    const mappedRes = result.reduce((item, current) => {
        return item + current;
    })
    return mappedRes
};

console.log(sumAll(2.5, 4))

// Do not edit below this line
module.exports = sumAll;
