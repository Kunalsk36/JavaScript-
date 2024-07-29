//create a new array of that stores marks greater than 90 and less than 100:
// let arrList = [59, 90, 64, 97, 99];
// function moreThanNinty(num){
//     return num >= 90 && num <= 100 ? num : null;
// }

// let output = arrList.filter(moreThanNinty);
// console.log(output);

// Take a number n as a input from user. Create an array of numbers from 1 to n:
let lastNum = prompt("Enter the last number: ");
let arrNum = [];
for(let i = 1; i <= lastNum; i++){
    arrNum.push(i);
}

let sumNumbers = arrNum.reduce((res, curr) =>{
    return res + curr;
});

let productNum = arrNum.reduce((res, curr) => {
    return res*curr;
})

console.log("sum of all numbers in the array = "+ sumNumbers);
console.log("product of all numbers in the array = "+productNum);
