// Part 1: Fizz Buzz

// Loop through all numbers from 1 to 100

for (let i = 1; i <= 100; i++) {
  // Check if the number is divisible by both 3 and 5
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " Fizz Buzz");
  }

  // Check if the number is divisible by 3
  else if (i % 3 === 0) {
    console.log(i + " Fizz");
  }

  // Check if the number is divisible by 5
  else if (i % 5 === 0) {
    console.log(i + " Buzz");
  }

  // If a number is not divisible by either 3 or 5, log the number
  else {
    console.log(i);
  }
}

// Part 2: Prime Time

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

// Part 3: Feeling Loopy

// Variable declaration for array of objects
const itemsArray = [
  { ID: 42, Name: "Bruce", Occupation: "Knight", Age: "41" },
  { ID: 57, Name: "Bob", Occupation: "Fry Cook", Age: "19" },
  { ID: 63, Name: "Blaine", Occupation: "Quiz Master", Age: "58" },
  { ID: 98, Name: "Bill", Occupation: "Doctor's Assistant", Age: "26" },
];

// Variable declaration for CVS to define the format
// And to extract given data values into their own section from the itemsArray variable
const csvString = [
  ["ID", "Name", "Occupation", "Age"],
  ...itemsArray.map((item) => [item.ID, item.Name, item.Occupation, item.Age]),
]

  // .map method is used to integrate the the four defined arrays into a singualar array
  // .join method is used along .map to format the values into a string
  // Final .join is used to add a line break after each array entry in curly brackets with a comma
  .map((e) => e.join(","))
  .join("\n");

// Outputs the CSV with given conditions
console.log(csvString);
