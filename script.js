


let arr1 = [4, 3, 2, 5].sort()
let arr2 = [3, 2, 5, 4].sort()


// checks whether given two lengthed arrays have same elements
const isSameArrays = (sortedArray1, sortedArray2) => {
    for (let key of sortedArray1.keys()) {
        if (sortedArray1[key] != sortedArray2[key]) {
            return false
        }
    }
    return true
}

// the function returns how many times the given array
// has been rotated;
// arr1 => actual array
// arr2 => rotated array

let findRotation = (arr2, arr2) => {

    let arrSorted1 = arr1.sort();
    let arrSorted2 = arr2.sort();
    
    if (arr1.length == arr2.length && isSameArrays(arrSorted1, arrSorted2)) {

        for (let i =0; i < 4; i++) {
        for (let j =0; j < 4; j++) {
            if (arr1[i] == arr2[j]) {
                return count =  length-j + i
                
            }
        }
    }
     }

     else return "Provide Same elements arrays"

    

  };

console.log(findRotation(arr1, arr2))








