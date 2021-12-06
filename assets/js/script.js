var flags = {
  lowerCase: false,
  upperCase: false,
  numeric: false,
  special: false,
  minLength: 0,
  maxLength: 20,
};

{
  ("flagLowerCase");
}

var lengthFinal;
var answer;
var password = [];

const lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var possibilities = [];

function getLength(min, max) {
  console.log(min);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Assignment code here
function generatePassword() {
  answer = window.prompt("Do you want lowercase characters?");
  if (answer == "yes") {
    flags.lowerCase = true;
    possibilities.push(...lower);
  }
  

  answer = window.prompt("Do you want uppercase characters?");
  if (answer == "yes") {
    flags.upperCase = true;
    possibilities.push(...upper);
  }
  

  for (i = 0; i < possibilities.length; i++) console.log(possibilities[i]);

  answer = window.prompt("Do you want Numeric characters?");
  if (answer == "yes") {
    flags.numeric = true;
    possibilities.push(...numeric);
  }

  answer = window.prompt("Do you want Special characters?");
  if (answer == "yes") {
    flags.special = true;
    possibilities.push(...special);
  }

  answer = window.prompt("What is the minimum length of the password?");
  flags.minLength = parseInt(answer);
  console.log(flags.minLength);

  answer = window.prompt("What is the maximum length of the password?");
  flags.maxLength = parseInt(answer);
  console.log(flags.maxLength);

  lengthFinal = getLength(flags.minLength, flags.maxLength);
  console.log(lengthFinal);

  // switch
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
