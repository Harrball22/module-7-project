// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(str){
    for (let i = 0; i < str.length - 1; i++){
        for (let ii = i + 1; ii < str.length; ii++){
            if (str[i] === str[ii]){
                return false
            }
        }
    }
    return true
}

console.log(hasUniqueChars("Monday"));
// -> True

console.log(hasUniqueChars("Moonday"));
// -> False


// Runtime complecity: Quadratic because of imbedded loop   O(n^2)
