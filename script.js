function threeSum(arr, target) {
// write your code here


	function decimalToBinary(decimal) {
  // Check if the input is a valid decimal number
  if (isNaN(decimal) || decimal < 0 || decimal % 1 !== 0) {
    return "Invalid input. Please enter a non-negative integer.";
  }

  // Handle the special case of decimal number 0
  if (decimal === 0) {
    return "0";
  }

  let binary = "";

  // Convert decimal to binary
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}

// Example usage
const decimalNumber = 42;
const binaryNumber = decimalToBinary(decimalNumber);
console.log("Binary representation:", binaryNumber);







