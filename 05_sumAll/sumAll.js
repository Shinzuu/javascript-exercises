const sumAll = function(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
        return "ERROR";
    } else {
        if (a > b) {
            let temp = b;
            b = a;
            a = temp;
        }
        let sum = ((b - a + 1) / 2) * (a + b);
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
