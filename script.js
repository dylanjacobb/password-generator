// Assignment Code
const generateBtn = document.querySelector("#generate");
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericalCharacters = "1234567890"
const specialCharacters = "!#$%&*?";

const generatePassword = () => {

  if (generateBtn) {
    // for character count
    let charCount = prompt('How many characters would you like?')
    if (charCount > 8 || charCount < 128) {
      console.log('charCount works')
    } else if (charCount < 8 || charCount > 128 ) {
        alert('You must choose between 8 to 128 characters')
      }
    // for lowercase letters
    let lowerLetterGen = prompt('Would you like lowercase letters in your generated password? Type "yes", or "no"')
    if (lowerLetterGen === 'yes') {
      console.log('lowerLetterGen yes');
    } else if (lowerLetterGen === 'no') {
      console.log('lowerLetterGen no');
    }
    // for uppercase letters
    let upperLetterGen = prompt('Would you like uppercase letters in your generated password? Type "yes", or "no"')
    if (upperLetterGen === 'yes') {
      console.log('upperLetterGen yes');
    } else if (upperLetterGen === 'no') {
      console.log('upperLetterGen no');
    }
    // for numerical characters
    let numericalGen = prompt('Would you like numbers in your generated password? Type "yes", or "no"')
    if (numericalGen === 'yes') {
      console.log('lowerLetterGen yes');
    } else if (numericalGen === 'no') {
      console.log('lnumericalGen no');
    }
    // for special characters
    let specialCharacterGen = prompt('Would you like special characters in your generated password? Type "yes", or "no"')
    if (specialCharacterGen === 'yes') {
      console.log('specialCharacterGen yes');
    } else if (specialCharacterGen === 'no') {
      console.log('specialCharacterGen no');
    }

    if (!lowerLetterGen && !upperLetterGen && !numericalGen && !specialCharacterGen) {
      alert('You did not meet the required feilds to generate a password, please try again');
      
    }
  }
}

// Write password to the #password input
const writePassword = () => {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
