// ================================
// 1. ADD / REMOVE ELEMENTS
// ================================

let arr = [10, 20, 30];

console.log("Original:", arr);

// push()
arr.push(40);
console.log("push:", arr);

// pop()
arr.pop();
console.log("pop:", arr);

// unshift()
arr.unshift(5);
console.log("unshift:", arr);

// shift()
arr.shift();
console.log("shift:", arr);

// splice()
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1);  // remove index 2
console.log("splice remove:", arr2);

arr2.splice(1, 0, 99); // insert
console.log("splice insert:", arr2);


// ================================
// 2. SEARCHING
// ================================

let nums = [10, 20, 30, 20];

console.log("indexOf:", nums.indexOf(20));
console.log("lastIndexOf:", nums.lastIndexOf(20));
console.log("includes:", nums.includes(30));

console.log("find:", nums.find(x => x > 15));
console.log("findIndex:", nums.findIndex(x => x > 15));


// ================================
// 3. SLICE
// ================================

let a = [100, 200, 300, 400];

console.log("slice:", a.slice(1, 3)); // returns [200, 300]


// ================================
// 4. JOIN / TO STRING
// ================================

console.log("join:", a.join("-"));
console.log("toString:", a.toString());


// ================================
// 5. CONCAT
// ================================

let c1 = [1, 2];
let c2 = [3, 4];

console.log("concat:", c1.concat(c2));


// ================================
// 6. ITERATION
// ================================

let numList = [2, 4, 6];

numList.forEach(x => console.log("forEach:", x));


// ================================
// 7. MAP
// ================================

console.log("map:", numList.map(x => x * 2));


// ================================
// 8. FILTER
// ================================

console.log("filter:", numList.filter(x => x > 3));


// ================================
// 9. SOME / EVERY
// ================================

console.log("some:", numList.some(x => x > 5));
console.log("every:", numList.every(x => x % 2 === 0));


// ================================
// 10. REDUCE
// ================================

console.log("reduce sum:", numList.reduce((sum, x) => sum + x, 0));


// ================================
// 11. SORT / REVERSE
// ================================

let mix = [40, 5, 20, 1];

console.log("sort:", mix.sort((a, b) => a - b)); // numeric sort
console.log("reverse:", mix.reverse());


// ================================
// 12. ARRAY CHECK / OTHER
// ================================

console.log("isArray:", Array.isArray(mix));

console.log("fill:", [1, 2, 3].fill(0));

console.log("copyWithin:", [10, 20, 30, 40].copyWithin(2, 0));

console.log("flat:", [1, [2, [3]]].flat(2));

console.log("flatMap:", [1, 2].flatMap(x => [x, x * 2]));


// ================================
// 13. Array.from / Array.of
// ================================

console.log("Array.from:", Array.from("Hello"));
console.log("Array.of:", Array.of(1, 2, 3));

