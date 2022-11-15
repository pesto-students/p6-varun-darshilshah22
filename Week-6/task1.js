function maxSumOfSubarray(arr) {
    let maxSum = 0;
    let curSum = 0;

    for(let i=0; i<arr.length; i++){
        curSum = curSum + arr[i];

        if(curSum > maxSum){
            maxSum = curSum;
        }

        if(curSum < 0){
            curSum = 0;
        }
    }
    return maxSum;
}

console.log("The maximum sum is: " + maxSumOfSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));