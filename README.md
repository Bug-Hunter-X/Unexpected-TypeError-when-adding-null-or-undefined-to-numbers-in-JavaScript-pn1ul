# Unexpected TypeError when adding null or undefined to numbers in JavaScript

This repository demonstrates an uncommon JavaScript bug related to type errors that occur when performing arithmetic operations on numbers with null or undefined values.  The bug arises from a seemingly simple addition operation but reveals a subtle aspect of JavaScript's type handling.

The `bug.js` file contains the erroneous code, while `bugSolution.js` offers a solution to address the type error.

## Problem

The provided code attempts to add two numbers. If either of the input numbers is null or undefined, it will throw a TypeError, rather than simply handling it. This is because Javascript attempts to use the null's length property, which does not exist.

## Solution

The solution is to explicitly check for null or undefined values before attempting the addition. This makes the code much more robust and prevents unexpected runtime errors.

## How to reproduce

1. Clone this repository.
2. Navigate to the directory using your terminal.
3. Run `node bug.js` to see the original error.
4. Run `node bugSolution.js` to see the corrected code in action.

This simple example highlights the importance of comprehensive error handling when working with JavaScript, particularly when dealing with potentially unexpected input types.