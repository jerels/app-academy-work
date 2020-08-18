// Put your code in here to make each of the tests described in the HTML file
// pass.
window.addEventListener("DOMContentLoaded", () => {
    const redButton = document.getElementById("turn-square-red");
    const redBox = document.getElementById("red-outlined-square");
    const xyzButton = document.getElementById("add-content-to-rectangle");
    const rect = document.getElementById("empty-rectangle");
    const logo = document.createElement("img");
    const lonely = document.getElementById("lonely-square");
    const imgButton = document.getElementById("add-image-to-rectangle");
    const bubble = document.getElementById("bubble-trouble");
    const decButton = document.getElementById("decrement");
    const incButton = document.getElementById("increment");
    const zeroButton = document.getElementById("zero-out");
    const counterVal = document.getElementById("counter-value");
    const inputBox = document.getElementById("my-name-is");
    const key = inputBox.id;
    inputBox.value = localStorage.getItem(key);
    const goAway = document.getElementById("going-away");
    bubble.addEventListener("click", e => {
        e.stopPropagation();
    })
    goAway.addEventListener("click", e => {
        e.preventDefault();
    })
    inputBox.addEventListener("keyup", () => {
        const name = inputBox.value;
        localStorage.setItem(key, name);
    })
    counterVal.innerHTML = `${counterValue}`;
    incButton.addEventListener("click", () => {
        counterValue++;
        counterVal.innerHTML = `${counterValue}`;
    });
    decButton.addEventListener("click", () => {
        counterValue--;
        counterVal.innerHTML = `${counterValue}`;
    });
    zeroButton.addEventListener("click", () => {
        counterValue = 0;
        counterVal.innerHTML = `${counterValue}`;
    })
    imgButton.addEventListener("click", () => {
        logo.setAttribute("src", "./images/logo-emblem-black.svg");
        lonely.appendChild(logo);
    });
    xyzButton.addEventListener("click", () => {
        rect.innerHTML = "XYZ";
    })
    redButton.addEventListener("click", () => {
        redBox.className = "red";
    });

});