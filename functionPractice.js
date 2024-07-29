// Create a function that takes argument and returns the total number of vowels in it:

// let vowels = ["a", "e", "i", "o", "u"];
// let vowelsCount = 0;
// function myFunction(str){
//     for(let i=0;i<str.length;i++){
//         for(let j=0;j<vowels.length;j++){
//             if(str[i] === vowels[j]){
//                 vowelsCount += 1
//             }
//         }
//     }
//     return vowelsCount;
// }

// let output = myFunction("tanvi");
// console.log(output); 


// Create an arrow function to perform same task:

let vowels = ["a", "e", "i", "o", "u"];
let vowelsCount = 0;
let output = (str) => {
    for(let i=0;i<str.length;i++){
                for(let j=0;j<vowels.length;j++){
                    if(str[i] === vowels[j]){
                        vowelsCount += 1
                    }
                }
            }
            return vowelsCount;
}
console.log(output("Kunal Kavathekar"));