/*
Given a string s containing just the 
characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid

Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false
*/

const isValid = s => {
  let arr = [];

  for(let i = 0; i < s.length; i++){
    let myTerm = s[i];

    if(myTerm === '(' || myTerm == '[' || myTerm === '{') {
      arr.push(myTerm);
    }

    if (arr.length === 0) return false;
    let check;

    switch(myTerm) {
        case')':
        check = arr.pop();
        if(check === '{' || check === '[') return false;
        break;

      case '}':
        check = arr.pop();
        if(check === '(' || check === '[') return false;
        break;

      case ']':
        check = arr.pop();
        if(check === '(' || check === '{') return false;
        break;
    }
  }
  return (arr.length === 0)
}