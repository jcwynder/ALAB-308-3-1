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
