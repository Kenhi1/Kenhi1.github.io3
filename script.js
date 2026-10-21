/*jslint browser */

function calculate() {
    "use strict";
    const quantityField = document.getElementById("quantity");
    const productField = document.getElementById("product");
    const error = document.getElementById("error");
    const result = document.getElementById("result");
    const quantityText = quantityField.value.trim();

    result.textContent = "";

    // Только целое положительное число без посторонних символов
    if (quantityText.match(/^[1-9]\d*$/) === null) {
        error.textContent = "Ошибка: введите целое число больше нуля (только цифры).";
        return;
    }
    error.textContent = "";

    const price = parseInt(productField.value, 10);
    const quantity = parseInt(quantityText, 10);
    const name = productField.options[productField.selectedIndex].text.split(" — ")[0];

    result.textContent = "Стоимость заказа (" + name + ", " + quantity +
            " шт.): " + (price * quantity) + " руб.";
}

window.addEventListener("DOMContentLoaded", function () {
    "use strict";
    const button = document.getElementById("calc-button");
    button.addEventListener("click", calculate);
});
