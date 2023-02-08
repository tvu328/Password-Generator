var symbols = ""

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword ();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = ""
  var passwordLength = parseInt(prompt ("Enter a password of at least 8 characters and no more than 128 characters."));
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
  password += getRandom(smallArr)
  console.log(smallArr)
}
if(upperCase === true){
  symbols = symbols + bigArr
  password += getRandom(bigArr)
  console.log(bigArr)
}
if(numbers === true){
  symbols = symbols + numbersArr
  password += getRandom(numbersArr)
  console.log(numbersArr)
}
if(specialCharacters === true){
  symbols = symbols + specialCharactersArr
  password += getRandom(specialCharactersArr)
  console.log(specialCharactersArr)
}
console.log(password)

for (let i = password.length; i < passwordLength; i++) {
  password += getRandom(symbols)
}

return password

}

function getRandom (str){
  return str[Math.floor(Math.random() * (str.length))];
}
