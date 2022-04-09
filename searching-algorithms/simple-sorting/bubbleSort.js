/*
 - Starting looping from with a variable called i the endo of the array towardas the beginning
 - Start an inner loop with a variable called j from the beginning until i - 1
 - If arr[j] is greater than arr[j+1], swap those two values!
 - Return the sorted array
*/

const bubbleSort = arr => {
    for (let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
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

// const bubbleSort = (arr) => {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     }
//     for(let i = arr.length; i > 0; i--) {
//         noSwaps = true;
//         for(let j = 0; j < i - 1; j++){
//             console.log(arr, arr[j], arr[j+1]);
//             if(arr[j] > arr[j+1]) {
//                 swap(arr, j, j+1);
//             }
//         }
//     }
//     return arr;
// }

// Almost SORTED
// const bubbleSort = arr => {
//     let noSwaps;
//     for (let i = arr.length; i > 0; i--) {
//         noSwaps = true;
//         for(let j = 0; j < i - 1; j++){
//             console.log(arr, arr[j], arr[j+1]);
//             if (arr[j] > arr[j+1]) {
//                 //Swap
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;   
//             }
//             if(noSwaps) break;
//         }        
//     }
//     return arr;
// }

