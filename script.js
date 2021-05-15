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
  var arr = [{'lower':lower},{'upper':upper},{'number':number},{'special':special},{'length':length}];
  if (!arr.lower && !arr.upper && !arr.number && !arr.special) {
    alert("At least one character type must be selected.");
    passwordCriteria();
  }
  return arr;
}
// returns a random character
var randomChar = function () {
  // create variable for each of the character options
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var number = '1234567890';
  var symbol = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~'
  // creates a random number between 1 and 4
  var choice = Math.floor(Math.random()*4);
  switch(choice){
    case 0:
      var x = lower[Math.floor(Math.random()*(lower.length+1))];
      var char = {'lower': x};
      break;
    case 1:
      var x = upper[Math.floor(Math.random()*(upper.length+1))];
      var char = {'upper': x};
      break;
    case 2:
      var x = number[Math.floor(Math.random()*(number.length+1))];
      var char = {'number': x};
      break;
    case 3:
      var x = symbol[Math.floor(Math.random()*(symbol.length+1))];
      var char = {'symbol': x};
      break;
  }
  return char;
}

var generatePassword = function () {
// Call password criteria function
  var criteria = passwordCriteria();
  var password = '';
  // Creates over the length
  for (var i = 0; i < criteria.length; i++) {
    // Get a random lower, upper, number, or symbol then check if it is allowed based on criteria
    var char = randomChar();
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
