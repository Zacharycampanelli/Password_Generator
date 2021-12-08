var flags = {
  lowerCase: false,
  upperCase: false,
  numeric: false,
  special: false,
  minLength: 0,
  maxLength: 20,
};

var lengthFinal;

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
const numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var possibilities = [];

// Returns a random length between the specified numbers for the password
function getLength(min, max) {
  console.log(min);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// Random number to return a random index in an array
function getRandom(len) {
  return Math.floor(Math.random() * len);
}

// Function to generate the password
function generatePassword() {
  // User Prompts
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

  // Create random length for password
  lengthFinal = getLength(flags.minLength, flags.maxLength);

  // Generates password
  console.log(flags.lowerCase, flags.upperCase, flags.numeric, flags.special);
  for (i = 0; i < lengthFinal; i++) {
    password.push(possibilities[getRandom(possibilities.length)]);
  }

  // Inserts a random character from each prompt option into the password if that option was selected
  var x;
  if (flags.lowerCase) {
    x = getRandom(password.length);
    console.log(x);
    password[x] = lower[getRandom(lower.length)];
    console.log(password[x]);
  }

  if (flags.upperCase) {
    x = getRandom(password.length);
    console.log(x);
    password[x] = upper[getRandom(upper.length)];
    console.log(password[x]);
  }

  if (flags.numeric) {
    x = getRandom(password.length);
    console.log(x);
    password[x] = numeric[getRandom(numeric.length)];
    console.log(password[x]);
  }

  if (flags.special) {
    x = getRandom(password.length);
    console.log(x);
    password[x] = special[getRandom(special.length)];
    console.log(password[x]);
  }

  // Return password
  console.log(password);
  return password.join("");
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
