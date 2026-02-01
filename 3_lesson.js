const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
const adaptive =
  prompt("Нужен ли адаптив на сайте?").toLowerCase() === "да" ||
  prompt("Нужен ли адаптив на сайте?").toLowerCase() === "yes" ||
  prompt("Нужен ли адаптив на сайте?").toLowerCase() === "true" ||
  prompt("Нужен ли адаптив на сайте?").toLowerCase() === "1";

// Доп услуги (4 вопроса)
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = Number(prompt("Сколько это будет стоить?"));
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = Number(prompt("Сколько это будет стоить?"));

// Конст для отката посреднику
const rollback = 15;

// 8) Вычисление итогa
const fullPrice = screenPrice + servicePrice1 + servicePrice2;

// 9) Расчет стоимости за вычетом отката посреднику
const rollbackAmount = fullPrice * (rollback / 100);
const servicePercentPrice = Math.ceil(fullPrice - rollbackAmount);
console.log(
  `Стоимость за вычетом отката посреднику: ${servicePercentPrice} рублей`
);

// 2) Работа с переменными (сохраняем весь предыдущий функционал)

// Вывод типов данных
console.log("\n--- Типы данных ---");
console.log("Тип данных переменной title:", typeof title);
console.log("Тип данных переменной fullPrice:", typeof fullPrice);
console.log("Тип данных переменной adaptive:", typeof adaptive);

// Вывод длины строки screens
console.log("\n--- Длина строки ---");
console.log("Длина строки screens:", screens.length);

// Вывод стоимости
console.log("\n--- Стоимость ---");
console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

// Приведение к нижнему регистру и разбиение на массив
console.log("\n--- Массив типов экранов ---");
const screensArray = screens.toLowerCase().split(", ");
console.log("Массив типов экранов:", screensArray);

// Расчет процента отката
console.log("\n--- Откат посреднику ---");
console.log(`Процент отката посреднику за работу: ${rollbackAmount} рублей`);

// 10) Конструкция условий для скидок
console.log("\n--- Скидки ---");
if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice <= 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice <= 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}

// Дополнительная проверка всех переменных
console.log("\n--- Проверка всех переменных ---");
console.log("title:", title);
console.log("screens:", screens);
console.log("screenPrice:", screenPrice);
console.log("adaptive:", adaptive);
console.log("service1:", service1);
console.log("servicePrice1:", servicePrice1);
console.log("service2:", service2);
console.log("servicePrice2:", servicePrice2);
console.log("rollback:", rollback);
console.log("fullPrice:", fullPrice);
console.log("servicePercentPrice:", servicePercentPrice);
