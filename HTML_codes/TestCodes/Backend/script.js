const URL = 'https://jsonplaceholder.typicode.com/todos'    //Ссылка на базу данных
const idname = "postid"
const classname = "postclass"

const container = document.getElementById('container')  

let userId                                                  //int
let title                                                   //string
let completed                                               //boolean
let id                                                      //int

function addElement(){                                      //Функция, создающая новый "Пост"
    let newDiv = document.createElement("div")              //Создание элемента div в переменной newDiv
    newDiv.innerHTML = "Post №" + id    
    newDiv.id = idname + (id)                               //Добавление id к элементу
    newDiv.className = classname                            //Добавление class к элементу
    container.appendChild(newDiv)                           //newDiv >>> дочерний элемент container

    let divUserId = document.createElement("div")           //Создание элемента div в переменной divUserId
    divUserId.innerHTML = "User Id: " + userId              //Вывод userId 
    divUserId.className = "divUserId"                       //Добавление class к элементу
    newDiv.appendChild(divUserId)                           //divUserId >>> дочерний элемент newDiv

    let divTitle = document.createElement("div")
    divTitle.innerHTML = "Title: " + title
    divTitle.className = "divTitle"
    newDiv.appendChild(divTitle)

    let divCompleted = document.createElement("div")
    divCompleted.innerHTML = "Completed: " + completed
    divCompleted.className = "divCompleted"
    newDiv.appendChild(divCompleted)
}

fetch(URL)
    .then(response => response.json())
    .then(arrayPosts => {                                   //Получение массива из запроса
        console.log(arrayPosts)                             //Вывод ВСЕГО массива в консоль
        for (let i = 0; i < arrayPosts.length; i++){        //Цикл перебора всех элементов массива. arrayPosts.length - длина массива
            userId = arrayPosts[i].userId                   //Получение userId из объекта arrayPosts[i]
            title = arrayPosts[i].title
            completed = arrayPosts[i].completed
            id = arrayPosts[i].id
            addElement()                                    //Вызов функции добавления нового элемента
        }
    })


//Если ограничить длину массива каким-либо числом, то это возможно отключит возможность создавать посты.
//Пост должен состоять из большего количества элементов, таких как <p>, <h1>, <h2>, <input>, <button> и т.п.
//divUserId имеет в себе два элемента: <h3 class = textPost> и <p class = textuserId>
//divTitle имеет в себе два элемента: <h3 class = textPost> и <h4 class = texttitle>
//divCompleted имеет в себе элемент checkbox, который не имеет возможности изменяться и стилизуется в соответствии со значением (true or false) 
