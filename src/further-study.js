// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
    const commonStrings = [];
    for(let i = 0; i < array1.length; i++){
        const elements1 = array1[i];
        for(let j=0; j < array2.length; j++){
            const elements2 = array2[j];
            if(elements1 == elements2){
                if(!commonStrings.includes(elements1)){
                    commonStrings.push(elements1);
                }
            }
        }
    }
    return commonStrings;
}

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
    const divisibleByEither = [];
    for(let i=1; i <= 100; i++){
        if(i % a == 0 || i % b == 0 || i % c == 0){
            divisibleByEither.push(i);
        }
    }
    return divisibleByEither;
}

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {}

export { commonStrings, compressString, divisibleByEither };
