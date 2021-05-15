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

var passwordCriteria = function () {
// Determine the length of the password, and sets character range
  var length = prompt("How long should the password be? Enter a length between 8 and 128 characters.");
  length = parseInt(length);
  if (length <= 7 || length >= 129) {
    alert("Please enter a number between 8 and 128.");
    var x = passwordCriteria();
    return x;
  }
// Determine what types of characters will be used
  var lower = confirm("Should the password contain lower case letters?");
  var upper = confirm("Should the password contain UPPER case letters?");
  var number = confirm("Should the password contain numbers?");
  var special = confirm("Should the password contain special characters? (@,!,#,etc.)");
// Return the criteria as an array
  var arr = [{'lower':lower},{'upper':upper},{'number':number},{'special':special},{'length':length}];

  if (!arr[0].lower && !arr[1].upper && !arr[2].number && !arr[3].special) {
    alert("At least one character type must be selected.");
    var y = passwordCriteria();
    return y;
  }
  return arr;
}
// returns a random character
var randomChar = function () {
  // create variable for each of the character options
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var number = '1234567890';
  var special = '!#$%&()*+,-./:;<=>?@[]^_`{|}~';
  // creates a random number between 1 and 4
  var choice = Math.floor(Math.random()*4);
  // For each character type, take a random character and creates an object with the randomly chosen character and its type
  switch(choice){
    case 0:
      var x = lower[Math.floor(Math.random()*(lower.length))];
      var char = [{test:'lower'},{'value': x}];
      break;
    case 1:
      var x = upper[Math.floor(Math.random()*(upper.length))];
      var char = [{test:'upper'},{'value': x}];
      break;
    case 2:
      var x = number[Math.floor(Math.random()*(number.length))];
      var char = [{test:'number'},{'value': x}];
      break;
    case 3:
      var x = special[Math.floor(Math.random()*(special.length))];
      var char = [{test:'special'},{'value': x}];
      break;
  }
// returns the char object
  return char;
}

var generatePassword = function (criteria) {
  // create an array to test our password agains the criteria
  var testArr = [{'lower': false},{'upper': false},{'number':false},{'special':false}];
  // create an empty string we can write the password into
  var password = '';
  // Writes the password over the length provided
  for (var i = 0; i < criteria[4].length; i++) {
    // Get a random lower, upper, number, or special character then check if it is allowed based on criteria, if not generate a new random character
    while (true) {
      var char = randomChar();
      if ((char[0].test === 'lower' && criteria[0].lower) ||
          (char[0].test === 'upper' && criteria[1].upper) ||
          (char[0].test === 'number' && criteria[2].number) ||
          (char[0].test === 'special' && criteria[3].special)){
            break;
      }
    }
    // checks what kind of character is generated and tracks it
    switch(char[0].test) {
      case 'lower':
         testArr[0].lower = true;
        break;
      case 'upper':
         testArr[1].upper = true;
        break;
      case 'number':
         testArr[2].number = true;
        break;
      case 'special':
         testArr[3].special = true;
        break;
    }
    // concats the generated character onto the password string
    password = password.concat(char[1].value);
  }
  // tests that the password meets the criteria, and if it does not it will generate a new password
  if (testArr[0].lower === criteria[0].lower && testArr[1].upper === criteria[1].upper && testArr[2].number === criteria[2].number && testArr[3].special === criteria[3].special) {
   return password; 
  } else {
    var x = generatePassword(criteria);
    return x;
  }
}


// Write password to the #password input
function writePassword() {
  var criteria = passwordCriteria();
  var password = generatePassword(criteria);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Look into a different array with some guarenteed characters and possibly a different function