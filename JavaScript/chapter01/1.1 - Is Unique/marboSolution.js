let isUnique = (word) => {
    let sortedLetters = word.split("").sort((a,b)=> a-b);

    for (let i = 0; i < sortedLetters.length-1; i++) {
        if (sortedLetters[i] === sortedLetters[i+1]) {
            return false;
        }
    }
    return true;
}

//Test cases:
isUnique("abcde"); //True
isUnique('asadfe'); //False