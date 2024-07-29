let arrNum = [1,2,3,4,5];
function squareNum(num){
    let squareNumber;
    squareNumber = num * num;
    return squareNumber;
}

arrNum.forEach((val) => {
    console.log(squareNum(val));
})

// another method:
console.log("By another method:")

let arrNum2 = [6,7,8,9,10];
function squareNum2(num){
    let squareNumber2 = num * num;
    console.log(squareNumber2);
}

arrNum2.forEach(squareNum2);