let colors = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"]



let bodytag = document.querySelector("body")
let btn = document.querySelector(".button")
let showColor = document.querySelector(".colorName")


// console.log(bodytag)





btn.addEventListener("click",()=>{
    let arry = "#"


    for(let i=0 ; i<6; i++){
        let random = Math.floor(Math.random()*colors.length)
        // console.log(colors[random])
        // arry.push(colors[random])
        arry += colors[random]
        // arry =+ `#${colors[random]}
    }
    // console.log(arry)

    bodytag.style.backgroundColor= arry

    showColor.innerText = `Background Color = ${arry}`


})





