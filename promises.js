// let promise = new Promise((resolve, reject) =>{
//     console.log("This is a promise");
//     resolve("success");
//     // reject("network failure");
// });



// function getData(id, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data : ", id);
//             if(getNextData){
//                 getNextData();
//             }
//             resolve("success");
//         }, 2000);
//     });
// }
// let promise2 = getData(1);
// console.log(promise2);
// setTimeout(()=>{
//     console.log(promise2);
// }, 4000);



// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("This is getPromise()");
//         resolve(200);
//         // reject("network error");
//     });
// }

// let promise3 = getPromise();
// console.log(promise3);
// promise3.then((res) => {
//     console.log("promise fulfiled ", res);
//     console.log(promise3);
// });

// promise3.catch((err) => {
//     console.log("Rejected because : ", err);
// });




function getData(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : ", id);
            resolve("success");
        }, 2000);
    });
}
console.log("getting data 1");
getData(1).then((res) => {
    console.log("getting data 2");
    return getData(2);
}).then((res) => {
    console.log("getting data 3");
    return getData(3);
}).then((res) => {
    console.log(res);
});