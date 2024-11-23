const cityPointerMain = document.getElementById("city-pointer-main")

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
