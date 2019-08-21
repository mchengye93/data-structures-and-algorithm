let isUnique = (str) => {
    let sortedLetters = str.split("").sort();

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

let isUnique1 = (str) => {
    let letters = {};

    for (let i = 0; i < str.length; i++) {
        if (letters[str[i]] === undefined) {
            letters[str[i]] = 1;
         } else {
             return false;
         }
    }
    return true;
}

//Test cases:
console.log(isUnique1("abcde")); //True
console.log(isUnique1('asadfe')); //False