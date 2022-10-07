// Assignment Code
let generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
    let randomInt = Math.random()
    return Math.floor(min + (1 - random))

}

function generatePassword() { 
    let passwordLength = window.prompt("How long do you want your password to be?");
   
    if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters.");
    return
} 
    // else if (passwordLength>128) {
    // window.alert("Password maximum is 128 characters");
    // return ""
    // }    
    let pwdOptionUpperCase = window.prompt("Click Ok to include uppercase.");
    let pwdOptionLowerCase = window.prompt("Click Ok to include lowercase.");
    let pwdOptionpwdNumber = window.prompt("Click Ok to include number.");
    let pwdOptionSpecialChar = window.prompt("Click Ok to include special charcter.");

    // Array for all character option for password
    let pwdUpperCase = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let pwdLowerCase = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let pwdNumber = ["0", "1","2","3","4","5","6","7","8","9"];
    let pwdSpecialChar = ["!", "@","#","$","%","^","&","*","(",")"];

    let pwdOptions = [];

    if (pwdOptionUpperCase === true) {
        pwdOptions.push(pwdOptionUpperCase)
    }

    if (pwdOptionLowerCase === true) {
        pwdOptions.push(pwdOptionLowerCase)
    }

    if (pwdOptionpwdNumber === true) {
        pwdOptions.push(pwdOptionpwdNumber)
    }

    if (pwdOptionSpecialChar === true) {
        pwdOptions.push(pwdOptionSpecialChar)
    }
    let generatePassword = ""

    for (let i = 0; i < passwordLength; i++){
        let randomInt = getRandomItem(pwdOptions)
        let randomChar = getRandomItem()
        generatePassword += randomChar
    }

   return generatePassword 

}
        

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






