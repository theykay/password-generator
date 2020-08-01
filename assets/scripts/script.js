// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // print this so you know when this function is called
  // DELETE BEFORE PUBLISHING
  console.log('generatePassword is running');
  let plength = prompt("Password length: ");
  if (parseInt(plength) === 'number' && 8 <= plength <= 128) {
    
  } else {
    alert('Password must be 8 to 128 characters in length');
    return;
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
