// Import readline module to handle terminal input/output
const readline = require('readline');

// Create readline interface for input/output in terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to estimate transaction fee based on amountToSend
function estimateTransactionFee(amountToSend) {
  const percentageFee = 0.015; 
  const minFee = 10;          
  const maxFee = 70;           

  // Calculate 1.5% fee of the amount
  let calculatedFee = amountToSend * percentageFee;

  // Enforce minimum and maximum fee limits
  if (calculatedFee < minFee) {
    calculatedFee = minFee;
  } else if (calculatedFee > maxFee) {
    calculatedFee = maxFee;
  }

  // Calculate total amount to debit (amount + fee)
  const totalDebited = amountToSend + calculatedFee;

  // Output the results 
  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log(`\nSend Money Securely!`);
}

// Prompt the user for the amount they want to send
rl.question("Unatuma Ngapi? (KES): ", function(input) {
  // Convert input string to a floating-point number
  const amountToSend = parseFloat(input);

  // Validate that input is a number and greater than zero
  if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
  } else {
    console.log("Tafadhali andika kiasi halali cha kutuma (KES).");
  }

  // Close the readline interface to end the program
  rl.close();
});
