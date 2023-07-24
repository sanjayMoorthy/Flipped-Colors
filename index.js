let Color = ["green", "red", "rgba(133,122,200)", "#f15025"]


let button = document.querySelector(".button")
let bodyTag = document.querySelector("body")
let showColor = document.querySelector(".colorName")

button.addEventListener("click",()=>{

let randomFunction= Math.floor(Math.random() * Color.length);
bodyTag.style.backgroundColor = Color[randomFunction]

showColor.innerText = `Background Color = ${Color[randomFunction]}`



})












