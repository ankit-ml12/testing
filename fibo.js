function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Test the function with a sample value
const n = 10;
for (let i = 0; i < n; i++) {
  console.log(fibonacci(i));
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  let fibPrev = 0;
  let fibCurrent = 1;

  for (let i = 2; i <= n; i++) {
    const temp = fibCurrent;
    fibCurrent = fibPrev + fibCurrent;
    fibPrev = temp;
  }

  return fibCurrent;
}

// Test the function with a sample value
const n = 10;
for (let i = 0; i < n; i++) {
  console.log(fibonacci(i));
}
