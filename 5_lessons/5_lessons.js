// ========== Получение данных от пользователя ==========

// Название проекта
const title = prompt("Как называется ваш проект?");

// Типы экранов
const screens = prompt("Какие типы экранов нужно разработать?");

// Стоимость верстки экранов (цикл do while)
let screenPrice;
do {
  const input = prompt("Сколько будет стоить данная работа?");
  screenPrice = Number(input);

  if (isNaN(screenPrice) || screenPrice <= 0) {
    alert("Пожалуйста, введите корректное положительное число!");
  }
} while (isNaN(screenPrice) || screenPrice <= 0);

const adaptive = confirm("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = getValidNumber("Сколько это будет стоить?");

const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = getValidNumber("Сколько это будет стоить?");

const rollback = 15;

// ========== Вспомогательная функция для валидации чисел ==========
function getValidNumber(message) {
  let number;
  do {
    const input = prompt(message);
    number = Number(input);

    if (isNaN(number) || number < 0) {
      alert("Пожалуйста, введите корректное неотрицательное число!");
    }
  } while (isNaN(number) || number < 0);

  return number;
}

// ========== 1) Функция получения суммы всех дополнительных услуг ==========
const getAllServicePrices = function () {
  const price1 =
    typeof servicePrice1 === "number" && !isNaN(servicePrice1)
      ? servicePrice1
      : 0;
  const price2 =
    typeof servicePrice2 === "number" && !isNaN(servicePrice2)
      ? servicePrice2
      : 0;

  return price1 + price2;
};

// Результат сохраняем в переменную
const allServicePrices = getAllServicePrices();

// ========== 2) Функция получения полной стоимости ==========
function getFullPrice() {
  const basePrice =
    typeof screenPrice === "number" && !isNaN(screenPrice) ? screenPrice : 0;
  const services =
    typeof allServicePrices === "number" && !isNaN(allServicePrices)
      ? allServicePrices
      : 0;

  return basePrice + services;
}

// Результат сохраняем в переменную
const fullPrice = getFullPrice();

// ========== 3) Функция форматирования названия проекта ==========
function getTitle() {
  // Проверка что это строка
  if (typeof title !== "string") {
    return "Без названия";
  }

  const trimmedTitle = title.trim();
  if (trimmedTitle.length === 0) return "Без названия";

  return (
    trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1).toLowerCase()
  );
}

const formattedTitle = getTitle();

//========== 4) Функция расчета стоимости за вычетом отката ==========
function getServicePercentPrices() {
  if (typeof fullPrice !== "number" || isNaN(fullPrice)) {
    console.error("Ошибка: полная стоимость не является числом");
    return 0;
  }

  const rollbackAmount = fullPrice * (rollback / 100);
  return Math.ceil(fullPrice - rollbackAmount);
}

const servicePercentPrice = getServicePercentPrices();

// ========== Вспомогательные функции ==========

// Функция для вывода типов данных
function showTypeOf(variableName, variableValue) {
  console.log(`Тип данных переменной ${variableName}:`, typeof variableValue);
}

// Функция для получения сообщения о скидке
function getRollbackMessage(price) {
  if (typeof price !== "number" || isNaN(price)) {
    return "Ошибка: неверный формат цены";
  }

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

console.log("=== 📊 Отчет о проекте ===\n");

// Вызовы функции showTypeOf
console.log("1. Типы данных:");
showTypeOf("title", title);
showTypeOf("fullPrice", fullPrice);
showTypeOf("adaptive", adaptive);
console.log("");

// Вывод строки с типами экранов для разработки
console.log("2. Типы экранов для разработки:");
console.log(screens);
console.log("");

// Сообщение о скидке пользователю (вызов функции getRollbackMessage)
console.log("3. Информация о скидке:");
console.log(getRollbackMessage(fullPrice));
console.log("");

// Стоимость за вычетом процента отката посреднику (вызов функции getServicePercentPrices)
console.log("4. Финансовая информация:");
console.log(
  `Стоимость за вычетом отката посреднику: ${servicePercentPrice} рублей`
);
console.log("");

// Детальная информация для отладки
console.log("=== информация ===\n");
console.log("Название проекта:", formattedTitle);
console.log("Адаптив:", adaptive ? "Да" : "Нет");
console.log("Стоимость верстки экранов:", screenPrice, "рублей");
console.log("Стоимость дополнительных услуг:", allServicePrices, "рублей");
console.log("Полная стоимость:", fullPrice, "рублей");
console.log("Процент отката посреднику:", rollback, "%");
console.log("Сумма отката:", Math.ceil(fullPrice * (rollback / 100)), "рублей");
console.log("Итоговая стоимость (после отката):", servicePercentPrice, "рублей");
