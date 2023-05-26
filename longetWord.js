// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function findLongestWord(strArr){
    let longestWord = ""

    for (let i = 0; i < strArr.length; i++){
        if (strArr[i].length > longestWord.length){
            longestWord = strArr[i]
        }
    }

    return longestWord.length
}

console.log(findLongestWord(["hi", "hello"]))
// -> 5

console.log(findLongestWord(["elbow", "cheese", "elephant", "cat"]))
// -> 8

// Runtime complexity: Linear because of the length of strArr      O(n)