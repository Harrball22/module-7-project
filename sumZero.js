// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero(numArr){
    for(let i = 0; i < numArr.length - 1; i++){
        for (let ii = i + 1; ii < numArr.length; ii++){
            if (numArr[i] + numArr[ii] === 0){
                return true
            }
        }
    }

    return false
}

console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// -> False

console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True


// Runtime complecity: Quadratic because of imbedded loop     O(n^2)