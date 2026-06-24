const palindromes = function (word) {
    const cleanWord =  word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reverseWord = cleanWord.split("").reverse().join("")
    
    return cleanWord === reverseWord
};

// Do not edit below this line
module.exports = palindromes;
