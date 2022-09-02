arrColor = ["0","1","2","3","4","5","6","A","B","C","D","E","F"];
const button = document.querySelector(".click");
const color = document.querySelector(".color");
button.addEventListener("click",()=>{
    let hexNum = "#";
    for(let i = 0 ; i < 6 ; i++){
        hexNum += arrColor[genRandNum()];
    }
    document.body.style.backgroundColor = hexNum;
    color.textContent = hexNum;
})
function genRandNum(){
    return Math.floor(Math.random() * arrColor.length);
}