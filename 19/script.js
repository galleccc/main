let time = document.querySelector("#time");
let submit = document.querySelector("#submit");

submit.addEventListener("click", (event) => {
    event.preventDefault(); // уникнути перезавантаження сторінки
    let minutesTime = time.value; // те, щ ввів користувач

    let counter = minutesTime * 60; // -> 60%

    if (time.value == "" || time.value == 0) {
        alert("введіть кількість хвилин!")
    } else {
        submit.disabled = true;
        let timeInterval = setInterval(() => {
        counter--;
        let minutes = Math.floor(counter/60); // 120/60 = 2, 60/60 = 1
        let seconds = counter % 60;
        document.querySelector(".timer").textContent = minutes + ":" + seconds;
        if (counter == 0) {
            clearInterval(timeInterval);
            submit.disabled = false;
        }
    }, 1000);
}
})