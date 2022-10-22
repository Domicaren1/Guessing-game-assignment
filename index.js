// prompt user for user name
const username = prompt("Enter username")
//Welcome user using username
console.log(`Hello ${username}`);

let point = 1
 for (let i = 2; i<10; i++){
   let random = Math.floor(Math.random()*i) +1;
   
   let myGuess = parseInt(prompt(`Guess a number between 1 and ${i}`));
     
if (myGuess !== random){
  myGuess = parseInt(prompt('Try again'));
  }if(myGuess = random){
  myGuess = parseInt(prompt(point++));
}
 }