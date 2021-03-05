// Assignment Code
// how to generate random number with math.random() https://www.w3schools.com/js/js_random.asp
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEGHHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var empty = "";

var generateBtn = document.querySelector("#generate");


function generatePassword() {
  finalpass = '';
  let combinedImput = empty.concat(lowercase, uppercase, numbers, symbols);
  console.log(combinedImput);
  let combinedImputArray = combinedImput.split('');
  console.log(combinedImputArray);

  var lengthSelected = prompt("Select a numerical value with a length of at least 8 characters and no more than 128 characters", "8");
  
  if (isNaN(lengthSelected) || lengthSelected < 8 || lengthSelected > 128) {
    alert("That was not a numerical Value please try again or less then 8 or greater then 128");
  } else {
    let pass
    for (let i = 0; i < lengthSelected; i++) {
      pass = combinedImputArray[Math.round(Math.random() * (combinedImputArray.length - 1))];
      finalpass += pass;
    }
  }
  return finalpass;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
