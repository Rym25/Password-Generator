// Assignment Code
var generateBtn = document.querySelector("#generate");

// How to Generate the Password
// -Establish Password Criteria
//    -Ask for password length (must be between 8-128 character)
//    -Ask for what characters to include
//      -Upper case letters
//      -Lower case letters
//      -Numbers
//      -Special Characters
// 
// -Create the Password
//    -Take in given criteria
//    -establish length based on criteria
//    -randomly generate password
//      -for each password character: 
//        -randomly select character type
//        -randomly select character from type list
//        -assign character to password array
//    -Verify password meets given criteria  
// 
var lengthPrompt


var passwordCriteria = function () {
// Determine the length of the password, and sets character range
  var length = prompt("How long should the password be? Enter a length between 8 and 128 characters.");
  length = parseInt(length);
  if (length <= 7 || length >= 129) {
    alert("Please enter a number between 8 and 128.");
    passwordCriteria();
  }
// Determine what types of characters will be used
  var lower = confirm("Should the password contain lower case letters?");
  var upper = confirm("Should the password contain UPPER case letters?");
  var number = confirm("Should the password contain numbers?");
  var special = confirm("Should the password contain special characters? (@,!,#,etc.)");
// Return the criteria as an array
  var arr = [lower,upper,number,special,length];
  return arr;
}

var generatePassword = function () {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
