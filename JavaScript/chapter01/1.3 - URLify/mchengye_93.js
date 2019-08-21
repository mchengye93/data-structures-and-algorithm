let urlify = (string) => {
    let urlString = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i]=== ' ') {
            urlString += '%20';
        }else {
            urlString += string[i];
        }
    }
    return urlString;
}

//Test Case
console.log(urlify('Mr John Smith') === 'Mr%20John%20Smith'); // True

