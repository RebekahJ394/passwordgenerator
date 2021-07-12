// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var specialCharacters = '!"#$%&()=-+/{}';
var result ='';
var possibleCharacters='';
var guarenteedCharacters='';

function generatePassword() {

var  passwordLength = parseInt(prompt("Please enter number between 8 and 128."));
  console.log("Password Length: ",passwordLength)
 // passwordLength =parseInt(passwordLength);




  if(passwordLength >= 8 && passwordLength <= 128) {
  console.log(passwordLength);

} else if (passwordLength < 8) {
  alert("Password must be larger than 8. Thanks!")

} else if (passwordLength > 128) {
  alert("Password must be less than 128. Thanks!")
} else if (isNaN(passwordLength)) {
  alert("Please enter a number")

}

var upperInput = confirm("Do you want uppercase letters in your password?") ;
var lowerInput = confirm("Do you want lowercase letters in your password?") ;
var numberInput = confirm("Do you want numbers in your password?");
var specialInput= confirm("Do you want special characters in your password?");

if(upperInput) {
possibleCharacters += upperCase
}
if(lowerInput) {
possibleCharacters += lowerCase
}
if(numberInput) {
  possibleCharacters += number
}
if(specialInput) {
  possibleCharacters += specialCharacters
}
console.log(possibleCharacters);
// run a function to generate the actual password
myFunction(passwordLength)
}

function myFunction(length) {
  for(var i=0; i<length; i++ ){
    var passwordMath = Math.floor(Math.random() * possibleCharacters.length)
    result += possibleCharacters.charAt(passwordMath)
    console.log("Your password is: ",result)
    
   // do a thing
   // add a character to the password from the possibleCharacters
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = result;
}
