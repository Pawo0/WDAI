const main = document.getElementById("main");

fetch("https://dummyjson.com/todos")
    .then((res) => res.json())
    .then((data) => {
        const {todos} = data
        todos.forEach((el) =>{
            const label = document.createElement("label")
            const input = document.createElement("input")
            const span1 = document.createElement("span")
            const span2 = document.createElement("span")
            span2.innerHTML = `<br>Zadanie użytkownika o id ${el.userId}`
            span2.classList.add("hidden")
            span2.classList.add("info")
            span1.innerText = el.todo
            input.type = "checkbox"
            if (el.completed){
                label.classList.add("complete")
                input.checked = true
                span2.classList.toggle("hidden")
            }
            label.appendChild(input)
            label.appendChild(span1)
            label.appendChild(span2)
            input.addEventListener('change',()=>{
                label.classList.toggle("complete")
                span2.classList.toggle("hidden")
            })
            main.appendChild(label)
        })
    });

