# Improper Null Handling in JavaScript

This repository demonstrates a common error in JavaScript: improper handling of null values in functions.  The `bug.js` file shows the incorrect implementation, where the function doesn't explicitly check for null values before performing operations. This can lead to unexpected behavior or runtime errors (e.g., TypeError). The `bugSolution.js` file provides a corrected version with explicit null checks.

## Bug Description

The original function (`foo`) doesn't handle null input values properly. If either `a` or `b` is null, the function may attempt to perform arithmetic on a null value, resulting in an error.

## Solution

The corrected function in `bugSolution.js` checks if `a` or `b` is null before performing any operations.  If either value is null, it returns 0, ensuring the function works correctly with null input. This is a more robust approach that avoids potential errors.