let btn1 = document.getElementById("mybtn1");
let btn2 = document.getElementById("mybtn2");
let copyDiv = document.querySelector(".copyCode");
let rgb1 = "#000";
let rgb2 = "#fff";

const hexValues = () =>{
    let myHexaValues = "0123456789abcdef";
    let color = "#";
    for(i=0; i<6; i++){
         color = color + myHexaValues[Math.floor(Math.random() * 16)];
    }
    return color;
}

const handleBtn1 = () => {
    rgb1 = hexValues();
    btn1.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `Background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
}

const handleBtn2 = () => {
    rgb2 = hexValues();
    btn2.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `Background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`;
}

btn1.addEventListener("click", handleBtn1);
btn2.addEventListener("click", handleBtn2);

copyDiv.addEventListener("click", ()=>{
    navigator.clipboard.writeText(copyDiv.innerText);
});