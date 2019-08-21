let checkPerm = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    let str1Letters = str1.split('').sort().join('');
    let str2Letters = str2.split('').sort().join('');

    return str1Letters === str2Letters;
}

console.log(checkPerm('abcef', 'fecba')) //True
console.log(checkPerm('aabdc','abcd')) // False
