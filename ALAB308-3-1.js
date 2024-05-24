// Loop through all numbers from 1 to 100

for (let i = 1; i <= 100; i++) {
  // Check if the number is divisible by 3

  if (i % 3 === 0) {
    console.log(i + " Fizz");
  }

  // Check if the number is divisible by 5
  else if (i % 5 === 0) {
    console.log(i + " Buzz");
  }

  // Check if the number is divisible by both 3 and 5
  else if (i % 3 === 0 && i % 5 == 0) {
    console.log(i + " Fizz Buzz");
  }

  // If a number is not divisible by either 3 or 5, log the number
  else {
    console.log(i);
  }
}

// Declare an arbitrary number, n

for (n = 2; n <= 100; n++) {
  let prime = true;

  // Create a loop that searches for the next prime number, starting at n and incrementing from there

  for (j = 2; j < n; j++) {
    if (n % j === 0) {
      prime = false;
    }
  }

  // As soon as you find the prime number, log that number and exit the loop
  if (prime) {
    console.log(n);
  }
}
