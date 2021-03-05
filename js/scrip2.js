// Assignment Code
// how to generate random number with math.random() https://www.w3schools.com/js/js_random.asp
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEGHHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var empty = "";

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  finalPass = "";
  var lengthSelection = prompt("Select a numerical value with a length of at least 8 characters and no more than 128 characters", "8");
  if (lengthSelection !== numbers) {
    alert("That was not a numerical Value please try again");
  } else {
    var lowUppNumSepc = prompt("What do u want your password to be made up of choose lowercase, uppercase, numeric, and/or special characters", "lowercase, uppercase, numeric, and special characters");
    if (lowUppNumSepc === str.includes("lowercase", "uppercase", "numeric", "special characters")) {

    }
    else if (lowUppNumSepc === str.includes("lowercase", "uppercase", "numeric", "special characters")) {
      let combinedImput = empty.concat(lowercase, uppercase, numbers, symbols);
      for(let i = 0; i < lengthSelection; i++) {
        combinedImput = combinedImput[Math.round(Math.random() * (combinedImput.length - 1))];
        finalPass += combinedImput;
      }
    }
    else if (lowUppNumSepc === str.includes("uppercase", "numeric", "special characters")){
      let combinedImput = empty.concat(lowercase, uppercase, numbers, symbols);
      for(let i = 0; i < lengthSelection; i++) {
        combinedImput = combinedImput[Math.round(Math.random() * (combinedImput.length - 1))];
        finalPass += combinedImput;
      }
    }
    else if (lowUppNumSepc === str.includes("numeric", "special characters")){
      let combinedImput = empty.concat(numbers, symbols);
      for(let i = 0; i < lengthSelection; i++) {
        combinedImput = combinedImput[Math.round(Math.random() * (combinedImput.length - 1))];
        finalPass += combinedImput;
      }
    }
    else if (lowUppNumSepc === str.includes("special characters")){
      let combinedImput = empty.concat(symbols);
      for(let i = 0; i < lengthSelection; i++) {
        combinedImput = combinedImput[Math.round(Math.random() * (combinedImput.length - 1))];
        finalPass += combinedImput;
      }
    }
    else if (lowUppNumSepc === str.includes("lowercase")){
      let combinedImput = empty.concat(lowercase);
      for(let i = 0; i < lengthSelection; i++) {
        combinedImput = combinedImput[Math.round(Math.random() * (combinedImput.length - 1))];
        finalPass += combinedImput;
      }
    }
    else if (lowUppNumSepc === str.includes("uppercase")){
      let combinedImput = empty.concat(uppercase);
      for(let i = 0; i < lengthSelection; i++) {
        combinedImput = combinedImput[Math.round(Math.random() * (combinedImput.length - 1))];
        finalPass += combinedImput;
      }
    }
    else if (lowUppNumSepc === str.includes("numeric")){
      let combinedImput = empty.concat(numbers);
      for(let i = 0; i < lengthSelection; i++) {
        combinedImput = combinedImput[Math.round(Math.random() * (combinedImput.length - 1))];
        finalPass += combinedImput;
      }
    }
    else if (lowUppNumSepc === str.includes("special characters")){

    }
    else {
      alert("your did not select \"lowercase, uppercase, numeric, and/or special characters\" please try again");
    }
  }
  return finalPass;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
