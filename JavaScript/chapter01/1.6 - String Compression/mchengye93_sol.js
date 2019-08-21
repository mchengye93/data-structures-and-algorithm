let stringCompression = (string) => {
    let count = 1;
    let compresStr = '';

    let letter = string[0];
    
    for (let i = 1; i < string.length; i++) {
        let nextLetter = string[i];
        if (letter !== nextLetter) {
            compresStr += compresStr+letter+count;
            count = 1;
            letter = nextLetter;
        } else {
            count++;
        }
    }
    return compresStr;


}