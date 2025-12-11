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
