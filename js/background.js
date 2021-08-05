const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.prepend(bgImage); // body안에서 맨 위에 추가
document.body.appendChild(bgImage); // body안에서 맨 아래 추가
