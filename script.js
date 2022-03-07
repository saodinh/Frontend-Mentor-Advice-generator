// "use strict";

const adviceQuoteElement = document.querySelector("#advice-quote");
const adviceIdElement = document.querySelector("#advice-id");
const btnNewAdvice = document.querySelector("#btn-new-advice");

getNewAdvice();

btnNewAdvice.addEventListener("click", () => {
    getNewAdvice();
});

function getNewAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then((res) => res.json())
        .then((data) => {
            adviceQuoteElement.textContent = `"${data.slip.advice}"`;
            adviceIdElement.textContent = data.slip.id;
        })
        .catch((err) => alert(err));
}
