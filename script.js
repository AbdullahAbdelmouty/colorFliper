const arrColor = ["#D3EBCD","#AEDBCE","#839AA8","#635666","#EEE4AB"];
const button = document.querySelector(".click");
const colorNum = document.querySelector(".color");
button.addEventListener("click",()=>{
    const randNumber = genRandNum();
    document.body.style.backgroundColor = arrColor[randNumber];
    colorNum.textContent = arrColor[randNumber];
})
function genRandNum(){
    return Math.floor(Math.random()*arrColor.length);
}