let palindromePerm = (word) => {
    let letters = word.replace(/ /g, '');
 
    let letterCount = {};

    for (let i = 0; i < letters.length; i++) {
        if (letterCount[letters[i]] === undefined) {
            letterCount[letters[i]] = 1;
        } else {
            letterCount[letters[i]]++;
        }
       
    }

    let oddCount = 0;
    for (let key in letterCount) {
        if (letterCount[key] % 2 !== 0) {
            oddCount++;
        }
        if (oddCount > 1) {
            return false;
        }
    }
    return true;
}