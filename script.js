// Assignment code here
var symbols = ""

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword ();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt ("Enter a password of at least 8 characters and no more than 128 characters.");
console.log(passwordLength)
if(passwordLength <8){
  alert('Enter a password of at least 8 characters.')
  
}
else if(passwordLength >128){
  alert('Enter a password of no more than 128 characters.')
}
else if(isNaN(passwordLength)){
  alert('The input has to be a real number.')
}

var lowerCase = confirm ("Do you want to include any lowercase letters?");
var upperCase = confirm ("Do you want to include any uppercase letters?");
var numbers = confirm ("Do you want to include any numbers?");
var specialCharacters = confirm ("Do you want to include any special characters?");

var smallArr = "abcdefghijklmnopqrstuvwxyz"
var bigArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbersArr = "0123546789"
var specialCharactersArr = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

if(lowerCase === true ){
  symbols = symbols + smallArr
  console.log(smallArr)
}
if(upperCase === true){
  symbols = symbols + bigArr
  console.log(bigArr)
}
if(numbers === true){
  symbols = symbols + numbersArr
  console.log(numbersArr)
}
if(specialCharacters === true){
  symbols = symbols + specialCharactersArr
  console.log(specialCharactersArr)
}

var myStr = 

function getRandomInt (min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}



}
