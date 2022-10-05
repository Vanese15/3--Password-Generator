// Assignment Code
let generateBtn = document.querySelector("#generate");

// Array for all character option for password
let upperCase = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
console.log(upperCase)
let lowerCase = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(lowerCase)
let number = ["0", "1","2","3","4","5","6","7","8","9"];
console.log(number)
let specialChar = ["!", "@","#","$","%","^","&","*","(",")"];
console.log(specialChar)

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}    

function generatePassword() { 
    let passwordLength = prompt("Password must be between 8 and 128 characters. How long do you want your password to be?");
    console.log(passwordLength);


    if (passwordLength<8) {
    alert("Password minimum is 8 characters");
    return ""
} 
    else if (passwordLength>128) {
    alert("Password maximum is 128 characters");
    return ""
    }    
    let passwordUpperCase = prompt("Click Ok to include uppercase.");
    let passwordLowerCase = prompt("Click Ok to include lowercase.");
    let passwordNumbers = prompt("Click Ok to include number.");
    let passwordspecialChar = prompt("Click Ok to include special charcter.");
}


















