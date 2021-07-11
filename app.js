const h1 = document.querySelector(".hello h1:first-child")


function handleTitleClick(event) {
    event.target.style.color = "blue";
}
function handleMouseEnter() {
    h1.innerText = "Mouse is here!"
}

function handleMouseLeave(){
    h1.innerText = "Mouse is gone!"
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato"
}
function handleWindowCopy(){
    alert("copier!")
}
function handleWindowOffline(){
    alert("SOS no WIFI!")
}
function handleWindowOnline(){
    alert("ALL GooooD!!")
}

// 2 가지 방식으로 클릭 처리
// h1.onclick = handleTitleClick;
h1.addEventListener("click",handleTitleClick);
// 마우스가 해당 element 위에 있을 때
h1.addEventListener("mouseenter", handleMouseEnter); 
// 마우스가 해당 element를 떠날 때
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
