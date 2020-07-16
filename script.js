// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharactersArray = ["*", "$", "@", "#", "&", "%", "(", ")"];
var lcArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ucArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var choicesArray = [];




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


function generatePassword() {
  var pwLength = prompt("How many characters would you like for your password?");
  if (pwLength < 8 || pwLength > 128) {
    alert("Your password must have a minimum of 8 characters and a maximum of 128.")
  } else {
    var includeLowercaseLetters = confirm("Would you like to include lowercase letters in your password?");
    if (includeLowercaseLetters == true) {
      choicesArray = choicesArray.concat(lcArray);
      console.log(choicesArray)
    }
  
    var includeUppercaseLetters = confirm("Would you like to include uppercase letters in your password?");
    if (includeUppercaseLetters == true) {
      choicesArray = choicesArray.concat(ucArray);
      console.log(choicesArray)
    }
  
    var includeNumbers = confirm("Would you like to include numbers in your password?");
    if (includeNumbers == true) {
      choicesArray = choicesArray.concat(numbersArray);
      console.log(choicesArray)
  
    }
  
    var includeSpecialCharacters = confirm("Would you like to include special characters in your password?");
    if (includeSpecialCharacters == true) {
      choicesArray = choicesArray.concat(specialCharactersArray);
      console.log(choicesArray)
    }
  var randomPassword = "";
    for (var i = 0; i < pwLength; i++) {
      var randomNumber = Math.floor(Math.random() * choicesArray.length);
      console.log(randomNumber)
      randomPassword+=choicesArray[randomNumber]
    }
    
    console.log(password)
  document.getElementById("password").value=randomPassword
  }

}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// var randomNumber = Math.floor(Math.random() * 10)
// console.log(numbersArray[randomNumber])
// alert
// confirms
// prompt
// return pw string