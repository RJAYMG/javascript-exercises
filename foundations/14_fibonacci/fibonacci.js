const fibonacci = function(num) {
    let a = 0;
    let b = 1;
    let next;

    const parsedNum = Number(num)
    if (parsedNum === 0) {
        return 0;
    }
    else if (parsedNum < 0) {
        return "OOPS";
    }
    for (let i = 2; i<=parsedNum; i++) {
        next = a + b;
        a = b;
        b = next;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
