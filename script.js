// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharactersArray = ["*", "$", "@"];
var lowercaseArray = [];
var uppercaseArray = [];
var choicesArray = [];
var pwLength = 30;
// var randomNumber = Math.floor(Math.random() * 10)
// console.log(numbersArray[randomNumber])
var numberWanted = true;
var specialCharacterWanted = true;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}
function generatePassword() {
  if (numberWanted == true) {
    choicesArray = choicesArray.concat(numbersArray)
    console.log(choicesArray)
  }

  if (specialCharacterWanted == true) {
    choicesArray = choicesArray.concat(specialCharactersArray)
    console.log(choicesArray)
  }

  for (let index = 0; index < pwLength; index++) {
    var randomNumber = Math.floor(Math.random() * choicesArray.length)
    console.log(choicesArray[randomNumber])
  }
  // return "password"
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// establish lowercaseArray
// establish uppercase
// if statement lowercase
// if statement uppercase
// alert
// confirms
// prompts
// required characters array
// return pw string