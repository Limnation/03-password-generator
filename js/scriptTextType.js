// declars everything as a string
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let uppercase = "ABCDEGHHIJKLMNOPQRSTUVWXYZ"
let numbers = "1234567890"
let symbols = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"


let generateBtn = document.querySelector("#generate");


function generatePassword() {
  let finalpass = '';
  let empty = "";
  // reasign the strings into a new shorter variable
  let low = lowercase;
  let upp = uppercase;
  let num = numbers;
  let sym = symbols;
  // combines them so u have all the possible text imputs to out puts
  let lowUpp = empty.concat(low, upp);
  let lowNum = empty.concat(low, num);
  let lowSym = empty.concat(low, sym);
  let uppNum = empty.concat(upp, num);
  let uppSym = empty.concat(upp, sym);
  let numSym = empty.concat(num, sym);
  let lowUppNum = empty.concat(low, upp, num);
  let uppNumSym = empty.concat(upp, num, sym);
  let lowNumSym = empty.concat(low, num, sym);
  let lowUppSym = empty.concat(low, upp, sym);
  let combinedImput = empty.concat(low, upp, num, sym);
  //turns combinedImputArray into an array then shortens its to all
  let combinedImputArray = combinedImput
  let all = combinedImputArray;
  
  //promt user with message with a default value of 8
  let lengthSelected = prompt("Select a numerical value with a length of at least 8 characters and no more than 128 characters", "8");
  
  // checks to see if imput value (lengthSelected) is Not-a-Number and if the lenth it < 8 or > 128
  if (isNaN(lengthSelected) || lengthSelected < 8 || lengthSelected > 128) {
    alert("That was not a numerical Value please try again or less then 128 or greater then 8");
  } else {
    // your write any combination of lowercase, uppercase, numeric, and/or special characters to get a password generated in that type
    let passwordCharacters = prompt("Please choose lowercase, uppercase, numeric, and/or special characters to include in the password", "lowercase, uppercase, numeric, and special characters");
    if (passwordCharacters === null) {
      alert("You pressed cancel before typing in lowercase, uppercase, numeric, and/or special into the prompt textbox");
      location.reload();
    }
    else if (passwordCharacters.includes("lowercase") && passwordCharacters.includes("uppercase") && passwordCharacters.includes("numeric") && passwordCharacters.includes("special")) {
      randomizeAdding(all);
    }
    else if (passwordCharacters.includes("lowercase") && passwordCharacters.includes("uppercase") && passwordCharacters.includes("numeric")) {
      randomizeAdding(lowUppNum);
      console.log(passwordCharacters);
    }
    else if (passwordCharacters.includes("uppercase") && passwordCharacters.includes("numeric") && passwordCharacters.includes("special")) {
      randomizeAdding(uppNumSym);
    }
    else if (passwordCharacters.includes("lowercase") && passwordCharacters.includes("numeric") && passwordCharacters.includes("special")) {
      randomizeAdding(lowNumSym);
    }
    else if (passwordCharacters.includes("lowercase") && passwordCharacters.includes("uppercase") && passwordCharacters.includes("special")) {
      randomizeAdding(lowUppSym);
    }
    else if (passwordCharacters.includes("lowercase") && passwordCharacters.includes("uppercase")) {
      randomizeAdding(lowUpp);
    }
    else if (passwordCharacters.includes("lowercase") && passwordCharacters.includes("numeric")) {
      randomizeAdding(lowNum);
    }
    else if (passwordCharacters.includes("lowercase") && passwordCharacters.includes("special")) {
      randomizeAdding(lowSym);
    }
    else if (passwordCharacters.includes("uppercase") && passwordCharacters.includes("numeric")) {
      randomizeAdding(uppNum);
    }
    else if (passwordCharacters.includes("uppercase") && passwordCharacters.includes("special")) {
      randomizeAdding(uppSym);
    }
    else if (passwordCharacters.includes("numeric") && passwordCharacters.includes("special")) {
      randomizeAdding(numSym);
    }
    else if (passwordCharacters.includes("lowercase")) {
      randomizeAdding(low);
    }
    else if (passwordCharacters.includes("uppercase")) {
      randomizeAdding(upp);
    }
    else if (passwordCharacters.includes("numeric")) {
      randomizeAdding(num);
    }
    else if (passwordCharacters.includes("special characters")) {
      randomizeAdding(sym);
    }
    
    //if you type anything isnt lowercase, uppercase, numeric, and/or special characters you get alerted to type one and/of the 4
    else {
      alert("You did not type in lowercase, uppercase, numeric, and/or special into the prompt textbox");
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
      console.log(imputArray)
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
