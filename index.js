// HW 5.1. Вивід чисел до консолі
// for (let i = 20; i <= 30; i += 0.5) {
//     console.log(i);
// }

// HW 5.2. Розрахунок валюти
const dollarInHryvnia = 26;

for (let value = 10; value <= 100; value += 10) {
    let result = value * dollarInHryvnia;
    console.log(`${value} доларів = ${result} гривень`);
}