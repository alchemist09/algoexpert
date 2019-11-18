let calculations = 0;

/**
 * Get the n-th fibonacci sequence
 * @param {number} n - The n-th fibonacci sequence
 * @returns {number}
 */
function fibonacci(n) {
  calculations++;
  if(n < 2) {
    return n;
  } else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

console.log('Slow Fib', fibonacci(10));
console.log('Calculations: ', calculations);


/**
 * Calculate n-th fibonacci sequence using Recursiion with Memoization
 * @returns {function} - Fuction that when called computes fibonacci sequence
 */
function fibonacciMaster() {
  let cache = {};
  return function fib(n) {
    calculations++;
    if(n in cache) {
      return cache[n];
    } else {
      if(n < 2) {
        return n;
      } else {
        cache[n] = fib(n-1) + fib(n-2);
        return cache[n];
      }
    }
  }
}