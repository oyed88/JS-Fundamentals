#!/usr/bin/node

function factorial(n) {
  if (isNaN(n)) {
    return 1;
  }
  n = Number(n);
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(process.argv[2]));
