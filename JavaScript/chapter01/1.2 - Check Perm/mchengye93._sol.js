let checkPerm = (word1, word2) => {
    if (word1.length !== word2.length) {
        return false;
    }

    let word1Letters = word1.split('').sort().join('');
    let word2Letters = word2.split('').sort().join('');

    return word1Letters === word2Letters;
}

console.log(checkPerm('abcef', 'fecba')) //True
