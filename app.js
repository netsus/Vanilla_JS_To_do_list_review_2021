const h1 = document.querySelector(".hello h1:first-child")


function handleTitleClick(event) {
    h1.classList.toggle("clicked");
}

h1.addEventListener("click",handleTitleClick);

