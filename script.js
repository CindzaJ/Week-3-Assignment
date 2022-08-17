// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//TO DO LIST:
// First attempt to try on this assignment. 
// 1. Separate arrays for numbers, lowercase, uppercase, & special characters. 
// 2. Prompt user for Password length. 
// 3. Assign for a Variable. 
// 4. Confirm password criterias from step 1. (4 varibles TBC on numbers, lowercase, uppercase, & special characters.)
// 5. Build you character array based on the user inputs. (Based on the confirmed.)
// 6. Build password with for loops. & Using the password lengths on each iteration, selects randomly on the character array.
// 7. Return key/password 

function generatePassword(){
  var characters=["!@#$%^&*()"];
  var numbers =["0123456789"];
  var lowercase =["abcdefghijklmnopqrstuvwxyz"];
  var uppercase =["ABCDEFGHIJLMNOPQRSTUVWXYZ"];
      
    passwordLength = prompt("What is your password length?");
      console.log(passwordLength)
    }
    //Tried Concat, Joining as suggested by Google. Researched MDN: Array.Prototype, Concat, Joining etc. 
const options=
  characters="!@#$%^&*()",
  numbers ="0123456789",
  lowercase ="abcdefghijklmnopqrstuvwxyz",
  uppercase ="ABCDEFGHIJLMNOPQRSTUVWXYZ";
  //Perhaps if...else statement + for loops? I'm very unsure.
  
  var password="";
  for (var i=0;i<=generatePassword;i++){
    var randomNumber=Math.floor(Math.random()*characters.passwordLength);
    password+=characters.substring((randomNumber,randomNumber+1)*15);
    
    document.getElementById("generatePassword").value = 'writePassword';
  
  }

// https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/
// https://dev.to/code_mystery/random-password-generator-using-javascript-6a 
// https://javascript.plainenglish.io/how-to-generate-a-random-password-using-javascript-cbeb4b72ec12