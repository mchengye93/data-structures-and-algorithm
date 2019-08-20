let isUnique = (word) => {
    let sortedLetters = word.split("").sort();

    for (let i = 0; i < sortedLetters.length-1; i++) {
        if (sortedLetters[i] === sortedLetters[i+1]) {
            return false;
        }
    }
    return true;
}

//Test cases:
console.log(isUnique("abcde")); //True
console.log(isUnique('asadfe')); //False

//If additional space can be used

let isUnique1 = (word) => {
    let letters = {};

    for (let i = 0; i < word.length; i++) {
        if (letters[word[i]] === undefined) {
            letters[word[i]] = 1;
         } else {
             return false;
         }
    }
    return true;
}

//Test cases:
console.log(isUnique1("abcde")); //True
console.log(isUnique1('asadfe')); //False