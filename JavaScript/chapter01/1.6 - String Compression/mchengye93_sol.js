let stringCompression = (string) => {
    let count = 1;
    let compresStr = '';

    let letter = string[0];
    
    for (let i = 1; i < string.length; i++) {
        let nextLetter = string[i];
        
        if (letter !== nextLetter) {
            compresStr += letter+count;
            count = 1;
            letter = nextLetter;
        } else {
            count++;
        }
        if (i === string.length-1) {
          compresStr += nextLetter+count;
         }
    }
    return compresStr;

}

console.log(stringCompression('aabbbacddddd')); //a2b3a1c1d5