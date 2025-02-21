function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values gracefully
  }
  return a + b; // Perform operation only if values are not null
}