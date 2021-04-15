// Assignment Code
const generateBtn = document.querySelector('#generate');
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericalCharacters = '1234567890'
const specialCharacters = '!#$%&*?[](|/';
let newPassword = [];
let generatedPassword = '';

const generatePassword = () => {

  if (generateBtn) {
    // for character count
    let charCount = parseInt(prompt('How many characters would you like?'))
    if (charCount > 8 || charCount < 128) {
      console.log(charCount);
    } else if (charCount < 8 || charCount > 128) {
      alert('You must choose between 8 to 128 characters')
    }

    // for lowercase letters
    let lowerLetterGen = prompt('Would you like lowercase letters in your generated password? Type "yes", or "no"')
    if (lowerLetterGen === 'yes') {
      for (let i = 0; i < lowerLetters.length; i++) {
        newPassword.push(lowerLetters[i])
      }
      console.log('lowerLetterGen yes');
    } else if (lowerLetterGen === 'no') {
      console.log('lowerLetterGen no');
      newPassword.push('');
    }

    // for uppercase letters
    let upperLetterGen = prompt('Would you like uppercase letters in your generated password? Type "yes", or "no"')
    if (upperLetterGen === 'yes') {
      for (let i = 0; i < upperLetters.length; i++) {
        newPassword.push(upperLetters[i])
      }
      console.log('upperLetterGen yes');
    } else if (upperLetterGen === 'no') {
      console.log('upperLetterGen no');
      newPassword.push('');
    }

    // for numerical characters
    let numericalGen = prompt('Would you like numbers in your generated password? Type "yes", or "no"')
    if (numericalGen === 'yes') {
      for (let i = 0; i < numericalCharacters.length; i++) {
        newPassword.push(numericalCharacters[i])
      }
      console.log('lowerLetterGen yes');
    } else if (numericalGen === 'no') {
      console.log('lnumericalGen no');
      newPassword.push('');
    }

    // for special characters
    let specialCharacterGen = prompt('Would you like special characters in your generated password? Type "yes", or "no"')
    if (specialCharacterGen === 'yes') {
      for (let i = 0; i < specialCharacters.length; i++) {
        newPassword.push(specialCharacters[i]);
      }
      console.log('specialCharacterGen yes');
    } else if (specialCharacterGen === 'no') {
      console.log('specialCharacterGen no');
      newPassword.push('');
    }

    // alert a message if all none of them are chosen
    if (!lowerLetterGen && !upperLetterGen && !numericalGen && !specialCharacterGen) {
      alert('You did not meet the required feilds to generate a password, please try again');

    }

    // loop through the selected character count
    for (let i = 0; i < charCount; i++) {
      newPassword[Math.floor(Math.random() * newPassword.length)]
      generatedPassword += newPassword[Math.floor(Math.random() * newPassword.length)]
    }
    return generatedPassword;
  }
}

// Write password to the #password input
const writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);