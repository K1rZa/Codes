const cityPointerMain = document.getElementById("city-pointer-main")
const cityInput = document.getElementById("city-input")

const flipScreenCount = 15

function addFlipScreen (count){
    for (let i = 0; i < count; i++){
        let FS_div = document.createElement("div")
        FS_div.className = "city-pointer-part"
        // FS_div.id = "flipScreen" + (i)
        cityPointerMain.appendChild(FS_div)
    }
}

addFlipScreen(flipScreenCount)

function signOnScreen (count){
    addEventListener("keypress", function(event) {
        var key = event.keyCode
        if (key === 13){
            let cityInputValue = cityInput.value
            let signArr = cityInputValue.split('')

            let get_FS_div = document.getElementsByClassName("city-pointer-part")
            for (let i = 0; i < count; i++){
                get_FS_div[i].innerHTML = signArr[i]
                if (get_FS_div[i].innerHTML === "undefined"){
                    get_FS_div[i].innerHTML = ""
                }
            }
        }
    })
}

signOnScreen(flipScreenCount)
