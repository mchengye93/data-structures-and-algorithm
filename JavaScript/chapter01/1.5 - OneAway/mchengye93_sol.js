let isOneAway = (word1, word2) => {
   
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
    let changes = 0;
    if (word1.length === word2.length) {
        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) {
                changes++;
            }
            if (changes > 1) {
                return false;
            }
        }
    }
    return true;


}


// ****** TESTS ******
function runTests(cases, expected) {
    for (const [str1, str2] of cases) {
      console.log(
        isOneAway(str1, str2) === expected && isOneAway(str2, str1) === expected
      );
    }
  }
  
  runTests(
    [
      ['pale', 'ple'], // deletion
      ['pale', 'opale'], // insertion in beginning
      ['pale', 'palse'], // insertion in middle
      ['pale', 'pales'], // insertion at end
      ['pale', 'bale'], // replacement
      ['p', 'b'],
      ['p', 'p'],
      ['p', ''],
      ['', '']
    ],
    true
  );
  
  runTests(
    [
      ['pale', 'ae'], // greater than 1 deletions
      ['pale', 'ppalpe'], // greater than 1 insertions
      ['pale', 'bake'], // greater than 1 replacements
      ['pale', 'balpe'], // 1 insertion, 1 replacement
      ['pale', 'plo'], // 1 deletion, 1 replacement
      ['pale', 'ales'] // 1 deletion, 1 insertion
    ],
    false
  );
  