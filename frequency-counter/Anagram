/*
Given two strings, write a function to determine if the second string is an anagram of the firts.
 An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema,
 formed from iceman;

 validAnagram('', '') // true;
 validAnagram('aaz', 'zza') // false;
 validAnagram('anagram', 'nagaram') // true;
 validAnagram('rat', 'car') // false;
 validAnagram('awesome, 'awesom) // false;
 validAnagram('texttwisttime', 'timetwisttext') // true;
*/

const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length) {
        return false;
    }

    let stringCounter1 = {};
    let stringCounter2 = {};

    for(let letter of str1) {
        stringCounter1[letter] = (stringCounter1[letter] || 0) + 1;
        console.log(stringCounter1);
    }
     for(let letter of str2) {
        stringCounter2[letter] = (stringCounter2[letter] || 0) + 1;
        console.log(stringCounter2);
    }

    for(let key in stringCounter1) {
        if(!(key in stringCounter2)){
            return false;
        }
        if(stringCounter2[key] !== stringCounter1[key]){
            return false
        }
    }
    return true;
}

validAnagram('1', '');
// validAnagram('rat', 'car') 