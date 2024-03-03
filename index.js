// EXAMPLE 1 - Get the Sum of all Values in a Map in JavaScript

const map1 = new Map([
  ['key1', 1],
  ['key2', 2],
]);

let sum = 0;

map1.forEach(value => {
  sum += value;
});

console.log(sum); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the Sum of all Values in a Map using a `for...of` loop

// const map1 = new Map([
//   ['key1', 1],
//   ['key2', 2],
// ]);

// let sum = 0;

// for (const value of map1.values()) {
//   sum += value;
// }

// console.log(sum); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Sum of all Values in a Map using `reduce()`

// const map1 = new Map([
//   ['key1', 1],
//   ['key2', 2],
//   ['key3', 3],
// ]);

// const values = Array.from(map1.values());

// const sum = values.reduce((accumulator, current) => {
//   return accumulator + current;
// }, 0);

// console.log(sum); // 👉️ 6
