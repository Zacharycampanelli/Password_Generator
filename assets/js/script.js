var flags = [
  { flagLowerCase: false },
  { flagUpperCase: false },
  { flagNumeric: false },
  { flagSpecialCharacter: false },
  { minLength: 0 },
  { maxLength: 128 },
];
var minLength = 8;
var maxLength = 128;
var answer

for (var i = 0; i < flags.length; i++) console.log(flags[i]);
// Assignment code here
function generatePassword() {
  answer = window.prompt("Do you want lowercase characters?");
  if (answer.toLowerCase == 'yes')  
    flags[]
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
