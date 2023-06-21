let btn = document.querySelector("#btn");
let input = document.querySelector("#input-form");
let list = document.querySelector(".list-container");

btn.addEventListener("click", () => {
    if (input.value === "") {
        alert("enter input value");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        li.setAttribute('class', 'list-item');
        let span = document.createElement("span");
        span.setAttribute("class", "fa fa-xmark");
        li.appendChild(span);
    } 
    input.value = "";
});

list.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }
})


