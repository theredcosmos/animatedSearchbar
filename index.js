let search = document.querySelector(".search");
let btn = document.querySelector(".btn");
let container = document.querySelector(".container");

btn.addEventListener("click", function(){
        container.classList.toggle("active");
        search.focus();
})