/*Write a function called same, which accepts two arrays.
The function should return true if every value in the array 
has its corresponding value squred in the second array.
The frequency of values must be the same.

same([1,2,3], [4,1,9]) //true
same([1,2,3], [1,9]) //false
same([1,2,1], [4,4,1]) //false (must be same frequency)

test git
*/

const same = (arr1, arr2) => {
    if(arr1.length !== arr2.length) {
        return false;
    }

    let counter1 = {};
    let counter2 = {};
    
    for (let val of arr1) {
        counter1[val] = (counter1[val] || 0) + 1;
        /* if(counter1[val]) {
            counter1[val] +=1;
        }else{
            counter1[val] = 1;
        } */
    }

    for(let val of arr2) {
        counter2[val] = (counter2[val] || 0) + 1;
    }
    for(let key in counter1) {
        if(!(key ** 2 in counter2)) {
            return false;
        }
        if(counter2[key ** 2] !== counter1[key]) {
            return false;
        }
    }
    return true;
}


// Time Complexity - O(n)

same([1,2,3,2], [1,4,9,4]);
