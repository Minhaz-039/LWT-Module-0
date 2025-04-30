//-------------------------Truthy & Falsy----------------------
/* ✅ Falsy Values (only 8 total):
 These values are considered false when converted to a boolean:

1. false – the boolean value false
2. 0 – the number zero
3. -0 – negative zero
4. 0n – BigInt zero
5. "" – empty string
6. null
7. undefined
8. NaN – Not a Number


✅ Truthy Values:
Everything not falsy is truthy. Here are common examples:

1. true
2. Any non-zero number: 1, -1, 3.14, etc.
3. Any non-empty string: "hello", "0", "false", etc.
4. Objects: {}, []
5. Functions
6. new Date()
7. Symbols: Symbol()
8. BigInts other than 0n: 1n, -1n
9. Non-empty arrays or objects, even if seemingly "empty": [], {}

*/


// ------------------- Ternary Operator -------------------

const a = 9 ;

const result = a%2 === 0? "Even" : a %3 === 0 ? "This is odd and also divisible by 3" : "Simple Odd Number" ;
console.log(result) ;