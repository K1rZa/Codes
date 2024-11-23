const cityPointerMain = document.getElementById("city-pointer-main")
const cityInput = document.getElementById("city-input")

const flipScreenCount = 15

function addFlipScreen (count){
    for (let i = 0; i < count; i++){
        let FS_div = document.createElement("div")
        FS_div.className = "city-pointer-part"
        FS_div.id = "flipScreen" + (i)
        cityPointerMain.appendChild(FS_div)
    }
}

addFlipScreen(flipScreenCount)

function getInputValue (){
    addEventListener("keypress", function(event) {
        var key = event.keyCode
        if (key === 13){
            let cityInputValue = cityInput.value
            let signArr = cityInputValue.split('')
            console.log(signArr)  
        }
    })
}

getInputValue()

