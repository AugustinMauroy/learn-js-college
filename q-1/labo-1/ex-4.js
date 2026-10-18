const button = document.querySelector("button");
let count = 0;

button.addEventListener("click", () => {
    count++;
    button.textContent = `Click me! (${count})`;
});