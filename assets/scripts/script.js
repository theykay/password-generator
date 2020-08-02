var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // print this so you know when this function is called
  // DELETE BEFORE PUBLISHING
  // console.log('generatePassword is running');

  let passcrit = {
    charnum: 8,
    symb: true,
    numb: true,
    upperlet: true,
    lowerlet: true
  };

  const symbs = [
    // https://stackoverflow.com/questions/13093126/insert-unicode-character-into-javascript
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
  ];

  passcrit.charnum = prompt("Password length: ");
  passcrit.charnum = parseInt(passcrit.charnum);

  // if length does not meet requirement, end function
  if (typeof passcrit.charnum === 'string' || passcrit.charnum < 8 || passcrit.charnum > 128) {
    alert('Error: must enter a number from 8 to 128');
    return;
  }

  let symbols = '';

  for (var i = 0; i < symbs.length; i++) {
    symbols += symbs[i];
  }

  // ask include symbols (list symbols)
  passcrit.symb = confirm('Include symbols?\n' + symbols);
  // ask include numbers
  passcrit.numb = confirm("Include numbers?");
  // ask include uppercase letters
  passcrit.upperlet = confirm('Include upper case letters?');
  // ask include lowercase letters
  passcrit.lowerlet = confirm('Include lower case letters?');
  
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
