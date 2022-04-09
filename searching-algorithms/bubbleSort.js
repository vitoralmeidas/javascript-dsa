/*
 - Starting looping from with a variable called i the endo of the array towardas the beginning
 - Start an inner loop with a variable called j from the beginning until i - 1
 - If arr[j] is greater than arr[j+1], swap those two values!
 - Return the sorted array
*/

const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++){
            console.log(arr);
            if (arr[j] > arr[j+1]) {
                //Swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;   
            }
        }        
    }

    return arr;
}

bubbleSort([37, 45, 29, 8])
bubbleSort([15, 2, 9, 1])
bubbleSort([3, 5, 29, 1])
bubbleSort([1, 8, 27, 10])
