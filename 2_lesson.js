// 1) Создание переменных
const title = "Сайт-визитка";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 5000;
const rollback = 15;
const fullPrice = 1500000;
const adaptive = true;

// 2) Работа с переменными

// Вывод типов данных
console.log("Тип данных переменной title:", typeof title);
console.log("Тип данных переменной fullPrice:", typeof fullPrice);
console.log("Тип данных переменной adaptive:", typeof adaptive);

// Вывод длины строки screens
console.log("Длина строки screens:", screens.length);

// Вывод стоимости
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

// Приведение к нижнему регистру и разбиение на массив
const screensArray = screens.toLowerCase().split(", ");
console.log("Массив типов экранов:", screensArray);

// Расчет процента отката
const rollbackAmount = fullPrice * (rollback / 100);
console.log(`Процент отката посреднику за работу: ${rollbackAmount} рублей`);

// 3) Дополнительная проверка
console.log("\n--- Проверка всех переменных ---");
console.log("title:", title);
console.log("screens:", screens);
console.log("screenPrice:", screenPrice);
console.log("rollback:", rollback);
console.log("fullPrice:", fullPrice);
console.log("adaptive:", adaptive);
