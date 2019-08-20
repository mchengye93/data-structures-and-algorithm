let oneAway = (word1, word2) => {
    let changes = 0;
    if (word1.length > word2.length) {
        for (let i  = 0; i < word2.length; i++) {
            if (word2[i] !== word1[i]) {
                //check if next substring is same
                if (word1.substring(i+1) !== word2.substring(i)) {
                    return false;
                }
            }
        }
    } 
    if (word2.length > word1.length) {
        for (let i  = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) {
                //check if next substring is same
                if (word2.substring(i+1) !== word1.substring(i)) {
                    return false;
                }
            }
        }
    } 


}