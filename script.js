// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }

let guessNum = prompt("Guess the number");
console.log("user enter number:",guessNum);
let num = 5;
console.log("game number:",num);
while(guessNum != num){
    guessNum = prompt("Guess the number again");
    console.log("user enter number:",guessNum);
    console.log("game number:",num);
};
console.log("you win");