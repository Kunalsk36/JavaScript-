let bgChangerBtn = document.querySelector("#bgChangerBtn");
let body1 = document.querySelector("body");
let mode = "light";
const bgChangerFun = bgChangerBtn.addEventListener("click", () => {
    if (mode === "light"){
        body1.classList.replace("bodyLight", "bodyDark");
        mode = "dark";
    }
    else{
        body1.classList.replace("bodyDark", "bodyLight");
        mode = "light";
    }
    console.log("background has been change");
});