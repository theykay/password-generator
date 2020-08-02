var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // print this so you know when this function is called
  // DELETE BEFORE PUBLISHING
  // console.log('generatePassword is running');

  // object containing default criteria for password,
  // functions for each character type to get random of type
  let passcrit = {
    // array containing symbols to:
    // - show available symbols on alert
    // - choose random symbols from
    symlib: [
      // resource for incorporating unicode symbols https://stackoverflow.com/questions/13093126/insert-unicode-character-into-javascript
      // ! exclamantion point
      '\u0021',
      // " double quote
      '\u0022',
      // # number sign
      '\u0023',
      // $ dollar sign
      '\u0024',
      // % percent
      '\u0025',
      // & ampersand
      '\u0026',
      // ' single quote
      '\u0027',
      // ( left parenthesis
      '\u0028',
      // ) right parenthesis
      '\u0029',
      // * asterisk
      '\u002A',
      // + plus
      '\u002B',
      // , comma
      '\u002C',
      // - minus
      '\u002D',
      // . period
      '\u002E',
      // / slash
      '\u002F',
      // : colon
      '\u003A',
      // ; semicolon
      '\u003B',
      // < less than
      '\u003C',
      // = equal
      '\u003D',
      // > greater than
      '\u003E',
      // ? question mark
      '\u003F',
      // @ at sign
      '\u0040',
      // [ left bracket
      '\u005B',
      // \ backslash
      '\u005C',
      // ] right bracket
      '\u005D',
      // ^ caret
      '\u005E',
      // _ underscore
      '\u005F',
      // ` grave accent (backtick)
      '\u0060',
      // { left brace
      '\u007B',
      // | vertical bar
      '\u007C',
      // } right brace
      '\u007D',
      // ~ tilde
      '\u007E'
    ],
    letlib: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    charnum: 8,
    symb: true,
    numb: true,
    upperlet: true,
    lowerlet: true,

    // random number generator
    // Math.floor(Math.random() * (max - min + 1)) + min
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

    // random symbol
    rsym: function () {
      return this.symlib[Math.floor(Math.random() * this.symlib.length)];
    },
    // random number
    rnum: function () {
      return Math.floor(Math.random()* 11);
    },
    // random upper case letter
    rupp: function () {
      return this.letlib[Math.floor(Math.random() * this.letlib.length)].toUpperCase();
    },
    // random lower case letter
    rlow: function () {
      return this.letlib[Math.floor(Math.random() * this.letlib.length)];
    }
  };

  // get desired character length from user
  passcrit.charnum = prompt("Password length: ");
  // change variable from string to number
  passcrit.charnum = parseInt(passcrit.charnum);
  // if length does not meet requirement, end function
  if (typeof passcrit.charnum === 'string' || passcrit.charnum < 8 || passcrit.charnum > 128) {
    alert('Error: must enter a number from 8 to 128');
    return;
  }

  // string variable to display symbols on alert
  let symbols = '';
  for (let i = 0; i < passcrit.symlib.length; i++) {
    symbols += passcrit.symlib[i];
  }

  // include symbols?
  passcrit.symb = confirm('Include symbols?\n' + symbols);
  // include numbers?
  passcrit.numb = confirm("Include numbers?");
  // include uppercase letters?
  passcrit.upperlet = confirm('Include upper case letters?');
  // include lowercase letters?
  passcrit.lowerlet = confirm('Include lower case letters?');

  // break out of function if no characters selected
  if (passcrit.symb === false && passcrit.numb === false && passcrit.upperlet === false && passcrit.lowerlet === false) {
    alert('Error: no characters selected');
    return;
  }
  console.log(passcrit.rsym());
  console.log(passcrit.rnum());
  console.log(passcrit.rupp());
  console.log(passcrit.rlow());
  // string variable that will hold password result
  let passtring = '';
  // for loop using passcrit.charnum to loop through each character position
  for (let j = 0; j < passcrit.charnum; j++) {
    // variable to hold randomly generated character
    let randchar = '';
  // 1. randomly choose between selected character types
  // 2. run random function for character type
  // 3. add character to end of string variable
    passtring += randchar;
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
