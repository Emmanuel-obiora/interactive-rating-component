const submitQuestion = document.getElementById("Question");
const thankYou = document.getElementById("Thanks");
const send = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

send.addEventListener('click', () => {
    thankYou.classList.remove('hidden');
    submitQuestion.style.display = "none";
})

rates.forEach((rate) => {
    rate.addEventListener('click', () => [
        rating.innerHTML = rate.innerHTML
    ])
})