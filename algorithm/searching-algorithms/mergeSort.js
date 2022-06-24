
/* Create and empty array, take a look at the smallest values 
    values in each array
 - While there are still values we haven't looked at..
    - If the value in the first array is smaller than the value in the second
        array, push the value in the first array into our results and move on to
        the next value in the first array
    - If the value in the first array is larger than the value in second array, push 
        push the value in the second array into our results and move on the next value,
        in the second array
    - Once we exhaust one array, push in all remaining values from the other array
*/

const merge = (arr1, arr2) =>{
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        } 
    }

    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}


/*
- mergeSort Pseudocode
    Break up the array into halves until you have arrays thata are empty or have one element
    Once you have smaller sorted arrays, merge those arrays whit other sorted arrays until you 
     are back at the full length of the array
    Once the array has been merged back together, return the merged (and sorted!) array
*/

const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let mid =  Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid))
    let rigth = mergeSort(arr.slice(mid));
    return merge(left, rigth);
}
console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));

