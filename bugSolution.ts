function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  const numA = typeof a === 'number' ? a : parseFloat(a);
  const numB = typeof b === 'number' ? b : parseFloat(b);
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Invalid input: Arguments must be numbers or numeric strings');
  }
  return numA + numB;
}

let result1 = addSafe("10", 5); //Correctly handles string
console.log(result1); // Output: 15

let result2 = addSafe("hello", 5); //Throws an error
console.log(result2); //This line will not be executed because of the error

let result3 = add(10, 5); //Correct usage
console.log(result3); // Output: 15