const palindromes = function (string) {
    const cleanedString = string.toLowerCase().split('').filter(char => /[a-z0-9]/.test(char)).join('');
    const reversedString = cleanedString.split('').reverse().join('');
    if(cleanedString === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
