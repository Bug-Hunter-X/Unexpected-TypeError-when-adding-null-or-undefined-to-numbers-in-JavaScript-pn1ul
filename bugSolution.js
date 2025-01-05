function foo(a, b) {
  // Explicitly handle null or undefined values
  a = a === null || a === undefined ? 0 : a; 
  b = b === null || b === undefined ? 0 : b; 
  return a + b;
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, undefined)); //Output: 5
console.log(foo(undefined, 5)); //Output: 5