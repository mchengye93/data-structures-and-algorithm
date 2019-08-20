let urlify = (word,length) => {
    let urlWord = '';

    for (let i = 0; i < word.length; i++) {
        if (word[i]=== ' ') {
            urlWord += '%20';
        }else {
            urlWord += word[i];
        }
    }
}