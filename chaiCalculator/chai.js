// Import the readline module to handle user input/output in the terminal
const readline = require('readline');

// Create an interface for input and output through the terminal
const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout  
});

// Function to calculate and display ingredients based on the number of chai cups
function calculateChaiIngredients(numberOfCups) {
  const water = numberOfCups * 200;        
  const milk = numberOfCups * 50;          
  const teaLeaves = numberOfCups;          
  const sugar = numberOfCups * 2;           

  // Print the calculated amounts in a friendly format
  console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${water} ml`);
  console.log(`Milk: ${milk} ml`);
  console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${sugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");
}

// Prompt the user with a question and wait for their input
rl.question("Karibu! How many cups of Chai Bora would you like to make? ", function(input) {
  // Convert the user input from string to an integer
  const numberOfCups = parseInt(input);

  // Check if the input is not a number or less than or equal to zero
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups.");
  } else {
    calculateChaiIngredients(numberOfCups);
  }

  // Close the readline interface after input is handled to end the program
  rl.close();
});
