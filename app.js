const adviceId = document.querySelector(".advice-id");
const adviceText = document.querySelector("blockquote");
const adviceButton = document.querySelector("button");



window.onload = () => {
    getAdvice();
};

adviceButton.addEventListener("click", getAdvice);

function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => {
            const advice = data.slip;

            adviceText.innerHTML = `"${advice.advice}"`;
            adviceId.innerHTML = `#${advice.id}`;
        });

    }

