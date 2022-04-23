# Hash Table

- Hash tables are collections of key-value pairs
- Hash tables can find values quickly given a key
- Hash tables can store data in a large array, and work by *hashing* the keys
- A good hash should be fast, distribute keys uniformly, and be deterministic
- Separate chaining and linear probing are two strategies used to deal with two keys that hash to the same index

## Badness

1.  Keys may not be nonneg. integers

   ​	Solution: *prehash* (hash functions)

   ​		- maps keys to nonneg. integers

2. Gigantic memory hog

   ​	Solution: *hashing*

      - reduce universe of all keys down to reasonable size m for table 

        <img src="C:\Users\vitor\AppData\Roaming\Typora\typora-user-images\image-20220423000341264.png" alt="image-20220423000341264" style="zoom: 50%;" />

           - Chaining 

             ​								<img src="C:\Users\vitor\AppData\Roaming\Typora\typora-user-images\image-20220423000659616.png" alt="image-20220423000659616" style="zoom: 80%;" />		