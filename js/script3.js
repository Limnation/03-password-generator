var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEGHHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var empty = "";

var generateBtn = document.querySelector("#generate");


function generatePassword() {
  finalpass = '';
  let combinedImput = empty.concat(lowercase, uppercase, numbers, symbols);
  let combinedImputArray = combinedImput.split('');
  let all = combinedImputArray;
  let low = lowercase.split('');
  let upp = uppercase.split('');
  let num = numbers.split('');
  let sym = symbols.split('');
  let lowUpp = empty.concat(lowercase, uppercase);
  let lowNum = empty.concat(lowercase, numbers);
  let lowSym = empty.concat(lowercase, symbols);
  let uppNum = empty.concat(uppercase, numbers);
  

  //promt user with message with a default value of 8
  let lengthSelected = prompt("Select a numerical value with a length of at least 8 characters and no more than 128 characters", "8");
  
  // checks to see if imput value (lengthSelected) is Not-a-Number and if the lenth it < 8 or > 128
  if (isNaN(lengthSelected) || lengthSelected < 8 || lengthSelected > 128) {
    alert("That was not a numerical Value please try again or less then 8 or greater then 128");
  } else {
    let passwordCharacters = prompt("PLease choose lowercase, uppercase, numeric, and/or special characters to include in the password", "lowercase, uppercase, numeric, and special characters");
    if (passwordCharacters.includes("lowercase", "uppercase", "numeric", "special characters")) {
      randomizeAdding(all);
    }
    else if (passwordCharacters.includes("lowercase", "uppercase", "numeric", "special characters")) {
      randomizeAdding(all);
    }
    else {
      alert("You did not type in lowercase, uppercase, numeric, and/or special characters into the prompt textbox");
    } 
  }
  return finalpass;

  // function constructor: to loop the length and imput the type of password by imputing the object when invocating it.
  function randomizeAdding(imputArray) {
    let pass;
    this.imput = imputArray;
    for (let i = 0; i < lengthSelected; i++) {
      pass = imput[Math.round(Math.random() * (imput.length - 1))];
      finalpass += pass;
    }
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
