// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var specialCharacters = '!"#$%&()=-+/{}';

function generatePassword() {
  let passwordLength = window.prompt("Please enter number between 8 to 128.");

  passwordLength =parseInt(passwordLength);
  console.log(typeof passwordLength);

}


  // if(!passwordLength){
  // return;
}

  if(passwordLength > 8 || passwordLength < 128) {
  console.log(passwordLength);

} else (passwordLength < 8) {
  alert("Password must be larger than 8. Thanks!")

} else (passwordLength > 128) {
  alert("Password must be less than 128. Thanks!")
}






