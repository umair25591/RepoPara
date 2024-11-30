const correctPassword = "DUAapril19@";

function checkPassword() {
    const storedPassword = localStorage.getItem('storedPassword');

    if (storedPassword !== correctPassword) {
        window.location.href = "index.html";
    }
}


const wrapper = document.getElementById("wrapper");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = `I love u too! <a href="paragraghs.html">click here</a>`;
    gif.src = "https://i.pinimg.com/originals/3e/e1/9c/3ee19c70ee55570338f832ff10c9a0df.gif";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
