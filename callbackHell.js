function getData(id, getNextData){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : ", id);
            if(getNextData){
                getNextData();
            }
            resolve("success");
        }, 6000);
    });
}

console.log("getting data 1");
getData(1, () => {
    console.log("getting data 2");
    getData(2, () => {
        console.log("getting data 3");
        getData(3, () => {
            console.log("getting data 4");
            getData(4);
        });
    });
});