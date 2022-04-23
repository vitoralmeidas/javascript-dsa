class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size); // length Array
  }

  _hash(key) {
    // the index of our key
    let total = 0;
    // to avoid colission
    let WEIRD_PRIMER = 31;
    // don't loop so much, max 100 or the key length
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      // convert the letter in a number
      // map "a" to 1, "b" to 2, "c" to 3...
      let value = char.charCodeAt(0) - 96;
      // to get a valid array index between  0 -> 53
      // adding each char
      total = (total * WEIRD_PRIMER + value) % this.keyMap.length;
    }
    return total;
  }

  /*
			SET 
		 - Accepts a key and a value
		 - Hashes the key
		 - Check if there is something in index on keyMap
		 - Stores the key-value pair in the hash table array via separate chaining
		*/

  set(key, value) {
    let index = this._hash(key);
    // check if there is something in index on keyMap
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    // add in keyMap a new array where already exist something in that index
    this.keyMap[index].push([key, value]);
  }

  /*
			GET
		 - Accepts a key
		 - Hashes the key
		 - Retrieves the key-value pair in the hash table 
		 - If the key isn't found, return undefined
		 */

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  /*
			VALUES
		 - Loops through the hash table array and return an array of values in the table
	*/

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          // duplicates values
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}
