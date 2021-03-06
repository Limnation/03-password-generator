// declars everything as a string
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let uppercase = "ABCDEGHHIJKLMNOPQRSTUVWXYZ"
let numbers = "1234567890"
let symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
let pass = "";

var generateBtn = document.querySelector("#generate");


function generatePassword() {
  
  //creating a empty string to put your final password into
  let finalpass = "";

  // turns these into arrays with a | that delinates it
  let low = lowercase.split('|');
  let upp = uppercase.split('|');
  let num = numbers.split('|');
  let sym = symbols.split('|');
  
  //promt user with message with a default value of 8
  let lengthSelected = prompt("Select a numerical value with a length of at least 8 characters and no more than 128 characters", "8");
  
  // checks to see if imput value (lengthSelected) is Not-a-Number and if the lenth it < 8 or > 128
  if (isNaN(lengthSelected) || lengthSelected < 8 || lengthSelected > 128) {
    alert("That was not a numerical Value please try again or less then 128 or greater then 8");
  } else {
    // confirm is your want your type to be lowercase
    let lowercaseConfirm = confirm("Do you want to use lowercase? \"ok\" for \"yes\" and \"cancel\" for \"no\" ");
    if(lowercaseConfirm === true) {
    pass = pass.concat(low);
    }
    // confirm is your want your type to be uppercase
    let uppercaseConfirm = confirm("Do you want to use uppercase? \"ok\" for \"yes\" and \"cancel\" for \"no\" ");
    if (uppercaseConfirm === true) {
      pass = pass.concat(upp);
    }
    // confirm is your want your type to be numeric
    let numericConfirm = confirm("Do you want use the numeric type? \"ok\" for \"yes\" and \"cancel\" for \"no\" ");
    if (numericConfirm === true) {
      pass = pass.concat(num);
    }
    // confirm is your want your type to be special characters
    let specialCharactersConfirm = confirm("Do you want to use special characters? \"ok\" for \"yes\" and \"cancel\" for \"no\" ");
    if (specialCharactersConfirm === true) {
      pass = pass.concat(sym);
    }
    // if your to not select and of the types your will get an alert then once your click ok on that alert your page will reload so u can start again
    if (pass === "") {
      alert("You did pick a type lowercase, uppercase, numeric, and/or special characters");
      location.reload();
    }
  }

  // the for loop that itereated up using the length from lengthSelected prompt imput then uses math.random on the valariable pass that has been collecting all date from the confirms then addition assigns it to finalpass
  for (let i = 0; i < lengthSelected; i++) {
    var passes = pass[Math.round(Math.random() * (pass.length - 1))];
    finalpass += passes;
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
