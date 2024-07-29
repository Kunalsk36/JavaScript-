// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
//     await api();
// }



function getData(id){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : ", id);
            resolve(200);
        },2000);
    });
}

// async function getAllData() {
//     console.log("getting data 1");
//     await getData(1);
//     console.log("getting data 2");
//     await getData(2);
//     console.log("getting data 3");
//     await getData(3);
//     console.log("Success");
// }
// getAllData();


// IIFE : Immediately Invoked Function Expression
// IIFE is a function that is called immediately as soon as it is defined.

// method 1 : IIFE
// (async function() {
//     console.log("getting data 1");
//     await getData(1);
//     console.log("getting data 2");
//     await getData(2);
//     console.log("getting data 3");
//     await getData(3);
//     console.log("Success");
// })();

// method 2 : IIFE

(async () => {
    console.log("getting data 1");
    await getData(1);
    console.log("getting data 2");
    await getData(2);
    console.log("getting data 3");
    await getData(3);
    console.log("Success");
})();