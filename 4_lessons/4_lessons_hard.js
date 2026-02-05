// ========== Получение данных от пользователя ==========
const title = prompt("Как называется ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?");
const screenPrice = Number(prompt("Сколько будет стоить данная работа?"));
const adaptive = confirm("Нужен ли адаптив на сайте?");

// Дополнительные услуги
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = Number(prompt("Сколько это будет стоить?"));
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = Number(prompt("Сколько это будет стоить?"));

// Константа для отката посреднику
const rollback = 15;

// ========== 1) Функция получения суммы всех дополнительных услуг ==========
const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};

// Результат сохраняем в переменную
const allServicePrices = getAllServicePrices();

// ========== 2) Функция получения полной стоимости ==========
function getFullPrice() {
  return screenPrice + allServicePrices;
}

// Результат сохраняем в переменную
const fullPrice = getFullPrice();

// ========== 3) Функция форматирования названия проекта ==========
function getTitle() {
  // Убираем пробелы в начале и конце, затем первый символ в верхний регистр, остальные в нижний
  const trimmedTitle = title.trim();
  if (trimmedTitle.length === 0) return "";
  return (
    trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1).toLowerCase()
  );
}

// Результат сохраняем в переменную
const formattedTitle = getTitle();

// ========== 4) Функция расчета стоимости за вычетом отката ==========
function getServicePercentPrices() {
  const rollbackAmount = fullPrice * (rollback / 100);
  return Math.ceil(fullPrice - rollbackAmount);
}

// Результат сохраняем в переменную
const servicePercentPrice = getServicePercentPrices();

// ========== Вспомогательные функции ==========

// Функция для вывода типов данных
function showTypeOf(variableName, variableValue) {
  console.log(`Тип данных переменной ${variableName}:`, typeof variableValue);
}

// Функция для получения сообщения о скидке
function getRollbackMessage(price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price > 15000 && price <= 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price <= 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
}

// ========== Вывод в консоль ==========

// Вызовы функции showTypeOf
console.log("=== Типы данных ===");
showTypeOf("title", title);
showTypeOf("fullPrice", fullPrice);
showTypeOf("adaptive", adaptive);

// Вывод строки с типами экранов для разработки
console.log("\n=== Типы экранов для разработки ===");
console.log(screens);

// Сообщение о скидке пользователю (вызов функции getRollbackMessage)
console.log("\n=== Скидка ===");
console.log(getRollbackMessage(fullPrice));

// Стоимость за вычетом процента отката посреднику (вызов функции getServicePercentPrices)
console.log("\n=== Стоимость за вычетом отката ===");
console.log(
  `Итоговая стоимость за вычетом отката посреднику: ${servicePercentPrice} рублей`
);

// Дополнительная информация
console.log("\n=== Дополнительная информация ===");
console.log("Название проекта:", formattedTitle);
console.log("Адаптив:", adaptive ? "Да" : "Нет");
console.log("Стоимость верстки экранов:", screenPrice, "рублей");
console.log("Стоимость дополнительных услуг:", allServicePrices, "рублей");
console.log("Полная стоимость:", fullPrice, "рублей");
console.log("Процент отката посреднику:", rollback, "%");
console.log("Сумма отката:", Math.ceil(fullPrice * (rollback / 100)), "рублей");
