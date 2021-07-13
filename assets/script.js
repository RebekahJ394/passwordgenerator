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
//created variables for what is needed for the password
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var specialCharacters = '!"#$%&()=-+/{}';
var result ='';
var possibleCharacters='';


function generatePassword() {
//created variable prompt for length input and converted it into numbers
var  passwordLength = parseInt(prompt("Please enter number between 8 and 128."));
  console.log("Password Length: ",passwordLength)
 // passwordLength =parseInt(passwordLength);



//created guidelines for user to follow the directions otherwise alerted
//user will return back to start if they enter in not a number
  if(passwordLength >= 8 && passwordLength <= 128) {
  console.log(passwordLength);

} else if (passwordLength < 8) {
  alert("Password must be larger than 8. Thanks!")

} else if (passwordLength > 128) {
  alert("Password must be less than 128. Thanks!")
} else if (isNaN(passwordLength)) {
  alert("Please enter a number. Thanks!")
  return
}
//user confirms what they would like in their password
var upperInput = confirm("Do you want uppercase letters in your password?") ;
var lowerInput = confirm("Do you want lowercase letters in your password?") ;
var numberInput = confirm("Do you want numbers in your password?");
var specialInput= confirm("Do you want special characters in your password?");

//additions and adjustments depending on what the user chooses
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
//function created and value defined in order to create the password
mathFunction(passwordLength)
}
//makes password and adds it to the result variable
function mathFunction(length) {
  for(var i=0; i<length; i++ ){
    var passwordMath = Math.floor(Math.random() * possibleCharacters.length)
    result += possibleCharacters.charAt(passwordMath)
    console.log("Your password is: ",result)
    
  }
  //pushed and shows password in the dom for user to see the password they generated 
  var passwordText = document.querySelector("#password");

  passwordText.value = result;
}
