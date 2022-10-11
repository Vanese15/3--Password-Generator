// Assignment Code
let generateBtn = document.querySelector("#generate");

// function randomInt(min, max) {
//     let randomInt = Math.random()
//     return Math.floor(min + (1 - random))

// }

function generatePassword() { 
    let passwordLength = parseInt(window.prompt("How long do you want your password to be?"));
//    console.log(passwordLength);

    if (isNaN(passwordLength)||passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters.");
    generatePassword()
} 
    // else if (passwordLength>128) {
    // window.alert("Password maximum is 128 characters");
    // return ""
    // }    
    let pwdOptionUpperCase = window.confirm("Click Ok to include uppercase.");
    let pwdOptionLowerCase = window.confirm("Click Ok to include lowercase.");
    let pwdOptionpwdNumber = window.confirm("Click Ok to include number.");
    let pwdOptionSpecialChar = window.confirm("Click Ok to include special charcter.");

    // Array for all character option for password
    let pwdUpperCase = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let pwdLowerCase = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let pwdNumber = ["0", "1","2","3","4","5","6","7","8","9"];
    let pwdSpecialChar = ["!", "@","#","$","%","^","&","*","(",")"];

    let pwdOptions = [];

    if (pwdOptionUpperCase) {
        pwdOptions = pwdOptions.concat(pwdUpperCase)
    }

    if (pwdOptionLowerCase) {
        pwdOptions = pwdOptions.concat(pwdLowerCase)
    }

    if (pwdOptionpwdNumber) {
        pwdOptions = pwdOptions.concat(pwdNumber)
    }

    if (pwdOptionSpecialChar) {
        pwdOptions = pwdOptions.concat(pwdSpecialChar)
    }
    // pwdOptions = pwdOptions.join("")
    console.log(pwdOptions);
    let finalPassword = ""

    for (let i = 0; i < passwordLength; i++){
        let randomInt = Math.floor(Math.random() * pwdOptions.length)
        console.log(randomInt)
        let randomChar = pwdOptions[randomInt]
        finalPassword += randomChar
    }

   return finalPassword 

}
        

// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






