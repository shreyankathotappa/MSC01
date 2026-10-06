// Exercise 6.1 - Basket with currency conversion

function totalCost(basket, prices) {

    let total = 0;

    for (let product in basket) {
        total = total + basket[product] * prices[product];
    }

    return total;
}

let basket = {
    notebook: 3,
    marker: 2,
    calculator: 1
};

let prices = {
    notebook: 2.5,
    marker: 1.5,
    calculator: 12
};

function calculate() {

    let total = totalCost(basket, prices);

    let currency = document.getElementById("currency").value;

    fetch("https://open.er-api.com/v6/latest/EUR")
        .then(resp => resp.json())
        .then(data => data["rates"][currency])
        .then(rate => {

            let convertedTotal = total * rate;

            document.getElementById("result").innerText =
                "Total: " + convertedTotal.toFixed(2) + " " + currency;
        });
}