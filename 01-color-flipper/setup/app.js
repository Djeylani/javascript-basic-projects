const colors = ["green", "red", "black", "violet", "magenta", "blue", "gray", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', () => {
    const randomNumber = randomGen();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
});

const randomGen = () => {
    return Math.floor(Math.random() * colors.length)
}