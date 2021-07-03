const title = document.getElementsByClassName("title_class");

console.log(typeof(title)); // object
Array.from(title).forEach(e => e.innerText = 'test');