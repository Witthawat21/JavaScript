function equation(input) {
    // Use the eval function to evaluate the string
    return eval(input);
  }
  
  // Test cases
  console.log(equation("1+1+1"));       // Output: 2
  console.log(equation("7*4-2"));    // Output: 26
  console.log(equation("1+1+1+1+1")); // Output: 5
  
  SubString