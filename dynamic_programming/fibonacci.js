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