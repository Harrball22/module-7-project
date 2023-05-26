// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(str){
    if (str.includes("a") && str.includes("b") && str.includes("c") && str.includes("d") && str.includes("e") && str.includes("f") && str.includes("g") && str.includes("h") && str.includes("i") && str.includes("j") && str.includes("k") && str.includes("l") && str.includes("m") && str.includes("n") && str.includes("o") && str.includes("p") && str.includes("q") && str.includes("r") && str.includes("s") && str.includes("t") && str.includes("u") && str.includes("v") && str.includes("w") && str.includes("x") && str.includes("y") && str.includes("z")){
        return true
    } else {
        return false
    }
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
// -> True

console.log(isPangram("I like cats, but not mice"));
// -> False

// Runtime complexity: Linear O(n)
// I think this because if you had a very long string with only a "z" in the last word, str.includes would have to search through every index in the string for a character that is z. At least, that is how I believe str includes works, moving from the start of the array to the end.