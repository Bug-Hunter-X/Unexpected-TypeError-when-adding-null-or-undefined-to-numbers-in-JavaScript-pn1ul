function foo(a, b) {
  if (a === null || b === null) {
    return null; // This will cause a type error if called with null or undefined
  }
  return a + b;
}

console.log(foo(null, 5)); // TypeError: Cannot read properties of null (reading 'length')
console.log(foo(5, null)); // TypeError: Cannot read properties of null (reading 'length')