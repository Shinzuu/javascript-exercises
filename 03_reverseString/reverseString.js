const reverseString = function(string) {
    let num = string.length;
    let nweString = "";
    for(let i = num - 1; i >= 0; i--){
        nweString += string[i];
    }

    return nweString;
};

// Do not edit below this line
module.exports = reverseString;
