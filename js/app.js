const items = document.querySelectorAll(".countdown-item > h3");

//назначить точку отсчета
let countdownDate = new Date(2024, 3, 14, 15, 30, 0).getTime(); // метод getTime() возвращает время в миллисекундах


function getCountdownTime() {
    // получить текущее время 
    const now = new Date().getTime();

    //найти разницу между текущим временем и точкой отсчета
    const distance = countdownDate - now;

    // 1c = 1000 мс
    // создать переменные в милисекундах

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // Подсчет дней, часов, минут и секунд

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    // создать массив с переменными 
    const values = [days, hours, minutes, seconds];
    console.log(values);

    // добавить значения переменных на страницу
    items.forEach(function (item, index) {
        item.textContent = values[index];
    })
};

let countdown = setInterval(getCountdownTime, 1000);