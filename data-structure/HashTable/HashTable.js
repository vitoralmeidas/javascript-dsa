class HashTable {
    constructor(size=53) {
        this.keyMap = new Array(size); // length Array
    }

    _hash(key) {
        // the index of our key
        let total = 0;
        // to avoid colission
        let WEIRD_PRIMER = 31;  
        // don't loop so much, max 100
        for(let i = 0; i < Math.min(this.keyMap.length, 100); i++){ 
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
}