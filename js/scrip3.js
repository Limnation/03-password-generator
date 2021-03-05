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

  //promt user with message with a default value of 8
  var lengthSelected = prompt("Select a numerical value with a length of at least 8 characters and no more than 128 characters", "8");
  
  // checks to see if imput value (lengthSelected) is Not-a-Number and if the lenth it < 8 or > 128
  if (isNaN(lengthSelected) || lengthSelected < 8 || lengthSelected > 128) {
    alert("That was not a numerical Value please try again or less then 8 or greater then 128");
  } else {
    var lengthSelected = prompt("Select a numerical value with a length of at least 8 characters and no more than 128 characters", "8");
    if (lengthSelected) {
        let pass;
      for (let i = 0; i < lengthSelected; i++) {
        pass = combinedImputArray[Math.round(Math.random() * (combinedImputArray.length - 1))];
        finalpass += pass;
      }
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
