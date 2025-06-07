// Import the readline module to handle user input from the terminal
const readline = require("readline");

// Function to calculate and display the boda boda fare
function calculateBodaFare(distanceInKm) {
  const baseFare = 50;         // Flat base fare in Kenyan shillings (KES)
  const chargePerKm = 15;      // Charge per kilometer traveled in KES

  // Calculate fare based on distance
  const distanceFare = distanceInKm * chargePerKm;
  const totalFare = baseFare + distanceFare;

  // Print the fare breakdown and total to the console
  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${distanceFare}`);
  console.log(`Total: KES ${totalFare}`);
  console.log(`\nPanda Pikipiki!`);
}

// Create an interface to read input and write output on the terminal
const rl = readline.createInterface({
  input: process.stdin,      // Input stream: terminal keyboard input
  output: process.stdout     // Output stream: terminal display
});

// Prompt the user to enter the trip distance in kilometers
rl.question("Unafika wapi Mkubwa? Kilometer ngapi?: ", (input) => {
  // Convert the user input (string) to a floating point number
  const distanceInKm = parseFloat(input);

  // Check if the input is a valid positive number
  if (!isNaN(distanceInKm) && distanceInKm > 0) {
    calculateBodaFare(distanceInKm);
  } else {
    console.log("Tafadhali andika kilomita halali (number greater than 0).");
  }

  // Close the readline interface to end the program
  rl.close();
});
