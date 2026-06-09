const generateButton = document.querySelector("Button");
const resetButton = document.getElementById("resetButton");
const display = document.getElementById("spellArea");

generateButton.addEventListener("click", function() {
    const ingredients = document.getElementById("ingredientsList");
    const items = ingredients.querySelectorAll("#ingredientsList li");
    const randomNum = Math.floor(Math.random() * items.length);
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(`${items}`);



    let count = 5;

    display.textContent = count;

    const counter = setInterval(() => {
        count--;

        display.textContent = count;

        if (count === 0) {
            clearInterval(counter);
            display.textContent = items[randomNum].textContent;
            display.style.backgroundColor = `rgb(${r},${g},${b})`;

        }
    }, 1000);
});

resetButton.addEventListener("click", function() {
    display.textContent = "";
})
