// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "/"];

// Generate password based on user selections
function generatePassword() {
  var numCharsChoice = parseInt(prompt("How many characters do you want to include (8-128)?"));
  if (numCharsChoice < 8 || numCharsChoice > 128) {
    alert("Please choose a number between 8 and 128");
    return generatePassword();
  }

  var upperCaseChoice = confirm("Do you want to include uppercase letters?");
  var lowerCaseChoice = confirm("Do you want to include lowercase letters?");
  var numberChoice = confirm("Do you want to include numbers?");
  var specialCharChoice = confirm("Do you want to include special characters?");

  if (!upperCaseChoice && !lowerCaseChoice && !numberChoice && !specialCharChoice) {
    alert("Please select at least one type of character");
    return generatePassword();
  }

  // if a user selects an option, it is stored to the allChars variable.
  var allChars = [];
  if (upperCaseChoice) {
    allChars = allChars.concat(upperCase);
  }
  if (lowerCaseChoice) {
    allChars = allChars.concat(lowerCase);
  }
  if (numberChoice) {
    allChars = allChars.concat(numbers);
  }
  if (specialCharChoice) {
    allChars = allChars.concat(specialChars);
  }
// generate random password based off of users selections
  var password = "";
  for (var i = 0; i < numCharsChoice; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
