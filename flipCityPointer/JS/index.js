const cityPointerMain = document.getElementById("city-pointer-main")
const cityInput = document.getElementById("city-input")

const flipScreenCount = 15

function addFlipScreen(count) {
    for (let i = 0; i < count; i++) {
        let FS_div = document.createElement("div")
        FS_div.className = "city-pointer-part"
        cityPointerMain.appendChild(FS_div)
    }
}

function signOnScreen(count) {
    addEventListener("keypress", function(event) {
        var key = event.keyCode
        if (key === 13) {
            let cityInputValue = cityInput.value
            let signArr = cityInputValue.split('')

            let get_FS_div = document.getElementsByClassName("city-pointer-part")
            for (let i = 0; i < count; i++) {
                if (signArr[i] !== undefined && /^[A-Za-zА-Яа-яЁё-]$/.test(signArr[i])) {
                    displayLetter(get_FS_div[i], signArr[i])
                } else {
                    get_FS_div[i].innerHTML = ""
                }
            }
        }
    })
}

function displayLetter(divElement, targetLetter) {
    const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ-'
    let index = 0

    const interval = setInterval(() => {
        divElement.textContent = alphabet[index % alphabet.length]
        index++

        if (divElement.textContent === targetLetter.toUpperCase()) {
            clearInterval(interval)
        }
    }, 300)
}

addFlipScreen(flipScreenCount)
signOnScreen(flipScreenCount)
