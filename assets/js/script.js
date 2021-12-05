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
var lengthFinal;
var answer;
var password = [];

// for (var i = 0; i < flags.length; i++) {
//   switch(i) {
//     case '0':
//       window.prompt(Include Lowercase? (Y/N));
//       break;
// }
//   }

function getLength(min, max) {
  console.log(min);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Assignment code here
function generatePassword() {
  // console.log(flags[0]);
  // answer = window.prompt("Do you want lowercase characters?");
  // if (answer == "yes") {
  //   flags[0] = true;
  //   console.log(flags[0]);
  // }

  // answer = window.prompt("Do you want uppercase characters?");
  // if (answer == "yes") {
  //   flags[1] = true;
  //   console.log(flags[1]);
  // }

  // answer = window.prompt("Do you want Numeric characters?");
  // if (answer == "yes") {
  //   flags[2] = true;
  //   console.log(flags[2]);
  // }

  // answer = window.prompt("Do you want Special characters?");
  // if (answer == "yes") {
  //   flags[3] = true;
  //   console.log(flags[3]);
  // }

  answer = window.prompt("What is the minimum length of the password?");
  flags[4] = parseInt(answer);
  console.log(flags[4]);

  answer = window.prompt("What is the maximum length of the password?");
  flags[5] = parseInt(answer);
  console.log(flags[5]);

  lengthFinal = getLength(flags[4], flags[5]);
  console.log(lengthFinal);

  for (i = 0; i < lengthFinal; i++) {
    password.push("y");
  }

  for (i = 0; i < password.length; i++) {
    console.log(password[i]);
  }
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
