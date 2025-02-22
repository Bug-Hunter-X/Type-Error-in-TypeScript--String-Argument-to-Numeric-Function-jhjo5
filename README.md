# Type Error in TypeScript: String Argument to Numeric Function

This repository demonstrates a common type error in TypeScript where a function expecting numeric arguments is called with a string. The type system prevents runtime errors by catching this at compile time.

## Bug Description
The `add` function is defined to accept two numbers and return their sum. However, the code attempts to call it with a string and a number. TypeScript's type checker correctly identifies this as an error.

## How to Reproduce
1. Clone this repository.
2. Compile the code using a TypeScript compiler (tsc).
3. Observe the type error reported by the compiler.

## Solution
The solution involves ensuring that the arguments passed to the `add` function are actually numbers. This could involve input validation or type conversions.
