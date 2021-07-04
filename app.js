const title = document.querySelector(".hello h1:first-child")


function handleTitleClick() {
    console.log("title was clicked!");
}

function changeColor() {
    title.style.color = "blue"; // title 클릭 -> 파란색으로 변경
}

title.addEventListener("click", handleTitleClick);

title.addEventListener("click", changeColor);