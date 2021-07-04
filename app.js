const title = document.querySelector(".hello h1:first-child")


function handelMouseEnter() {
    title.innerText = "Mouse is here!"
}

function handelMouseLeave(){
    title.innerText = "Mouse is gone!"
}

// 마우스가 해당 element 위에 있을 때
title.addEventListener("mouseenter", handelMouseEnter); 

// 마우스가 해당 element를 떠날 때
title.addEventListener("mouseleave", handelMouseLeave);