var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // print this so you know when this function is called
  // DELETE BEFORE PUBLISHING
  // console.log('generatePassword is running');

  // object containing default criteria for password,
  // functions for each character type to get random of type
  let elements = {
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
    // this is where result will be stored
    password: '',

    // random number generator
    // Math.floor(Math.random() * (max - min + 1)) + min
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

    // random symbol
    rsym: function () {
      return this.symlib[Math.floor(Math.random() * this.symlib.length)];
    },
    // random number
    rnum: function () {
      return Math.floor(Math.random() * 11);
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
  elements.charnum = prompt("Password length: ");
  // change variable from string to number
  // if length does not meet requirement, end function

  if (isNaN(parseInt(elements.charnum)) || parseInt(elements.charnum) < 8 || parseInt(elements.charnum) > 128 || elements.charnum === null) {
    do {
      alert('Error: must enter a number from 8 to 128');
      elements.charnum = prompt('Password length: ');
    } while (isNaN(parseInt(elements.charnum)) || parseInt(elements.charnum) < 8 || parseInt(elements.charnum) > 128 || elements.charnum === null);
  } else {
    elements.charnum = parseInt(elements.charnum);
  }

  // string variable to display symbols on alert
  let symbols = '';
  for (let i = 0; i < elements.symlib.length; i++) {
    symbols += elements.symlib[i];
  }

  // include symbols?
  elements.symb = confirm('Include symbols?\n' + symbols);
  // include numbers?
  elements.numb = confirm("Include numbers?");
  // include uppercase letters?
  elements.upperlet = confirm('Include upper case letters?');
  // include lowercase letters?
  elements.lowerlet = confirm('Include lower case letters?');

  // break out of function if no characters selected
  if (elements.symb === false && elements.numb === false && elements.upperlet === false && elements.lowerlet === false) {
    alert('Error: no characters selected');
    return;
  }

  let selectors = [];
  // if character choice is true, put into array
  if (elements.symb === true) {
    selectors.push('symbols');
  }
  if (elements.numb === true) {
    selectors.push('numbers');
  }
  if (elements.upperlet === true) {
    selectors.push('upper');
  }
  if (elements.lowerlet === true) {
    selectors.push('lower');
  }

  // for loop using elements.charnum to loop through each character position
  for (let j = 0; j < elements.charnum; j++) {
    // 1. randomly choose between selected character types
    // use selectors array length to generate random number
    let index = Math.floor(Math.random() * selectors.length);
    // pick element at that index, use if statements to run appropriate random function
    // ex: if array[i] is symb, run rsym

    // 2. run random function for character type
    // 3. add character to end of string variable
    if (selectors[index] === 'symbols') {
      elements.password += elements.rsym();
    } else if (selectors[index] === 'numbers') {
      elements.password += elements.rnum();
    } else if (selectors[index] === 'upper') {
      elements.password += elements.rupp();
    } else if (selectors[index] === 'lower') {
      elements.password += elements.rlow();
    }
  }
  // return password and end function
  return elements.password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
