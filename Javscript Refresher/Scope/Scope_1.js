// Global Scope
const globalConst = "I am a global const";
// globalConst = "New value"; // ❌ Error: Assignment to constant variable.
console.log(globalConst); // ✅ Accessible

function outerFunction() {
    // Function Scope
    const outerConst = "I am a const in outerFunction";

    console.log(globalConst);  // ✅ Accessible
    console.log(outerConst);   // ✅ Accessible

    if (true) {
        // Block Scope
        let blockConst = "I am a const in a block";
        blockConst = "New value"; // ✅ Allowed, but not recommended
        console.log(blockConst); // ✅ Accessible inside this block
    }

    // console.log(blockConst); ❌ Error: blockConst is not defined (block-scoped)

    function innerFunction() {
        // Nested Function Scope
        const innerConst = "I am a const in innerFunction";
        console.log(globalConst);   // ✅
        console.log(outerConst);    // ✅
        console.log(innerConst);    // ✅
    }

    innerFunction();

    // console.log(innerConst); ❌ Error: innerConst is not defined
}

outerFunction();

// console.log(outerConst);  ❌ Error: outerConst is not defined
// console.log(innerConst);  ❌ Error: innerConst is not defined
