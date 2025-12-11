let arr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]; // [ 5, 27, 39, 1001 ]
let arr1 = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]; // [27, 5, 39, 1001]
let arr2 = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]; // [9, 35, 97, 1000000]
let arr3 = [[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]  // [25, 48, 21, -3]

function largestOfAll(arrays){
    const largestArray = [];
    for(let i = 0 ; i < arrays.length; i++){
        let largestNumber = arrays[i][0] ;
        let n = arrays[i].length ;
        for(let j=1 ; j < n; j++){
            if(arrays[i][j] > largestNumber){
                largestNumber = arrays[i][j]
            }
        }
        largestArray.push(largestNumber);
    }
    return largestArray;
}

const largestArray = largestOfAll(arr);
console.log(largestArray);

const largestArray1 = largestOfAll(arr1);
console.log(largestArray1);

const largestArray2 = largestOfAll(arr2);
console.log(largestArray2);

const largestArray3 = largestOfAll(arr3);
console.log(largestArray3);