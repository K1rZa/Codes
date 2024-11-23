const view = document.getElementById("view")

view.addEventListener("dblclick", function () {
        view.style.display = "none"

        let edit = document.createElement("textarea")
        edit.className = "edit"
        edit.setAttribute("placeholder", "text")
        edit.value = view.innerText
    
        view.after(edit)

        edit.focus()
    
        edit.addEventListener("blur", function () {
            view.innerHTML = edit.value
            edit.remove()
            view.style.display = "flex"

            let text = document.createElement("p")
            text.className = "new_text"
            text.innerHTML = view.innerHTML
            view.innerHTML = ""
            view.appendChild(text)
        })
})
