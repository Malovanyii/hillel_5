// HW 5.1. Вивід чисел до консолі
// for (let i = 20; i <= 30; i += 0.5) {
//     console.log(i);
// }

// HW 5.2. Розрахунок валюти
// const dollarInHryvnia = 26;

// for (let value = 10; value <= 100; value += 10) {
//     let result = value * dollarInHryvnia;
//     console.log(`${value} доларів = ${result} гривень`);
// }

// HW 5.3. Пошук потрібних чисел
// while (true) {
//     N = prompt("Введіть ціле число N:");

//     if (N !== null && Number.isInteger(parseFloat(N))) {
//         N = parseInt(N);
//         for (let i = 1; i <= 100; i++) {
//             if (i * i > N) break;
//             console.log(i);
//         }
//         break;
//     } else {
//         alert("Будь ласка, введіть ціле число.");
//     }
// }

// HW 5.4. Просте число чи ні
let num = prompt('Введіть ціле число');

if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(`Число ${num} не є простим`);
            break;
        } else {
            console.log(`Число ${num} є простим`);

        }
    }
} else {
    console.log(`Число повинно бути більше 1`);
}