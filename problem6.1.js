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


// Convert the basket total into another currency

async function calculate() {

    let total = totalCost(basket, prices);

    let currency = document.getElementById("currency").value;

    try {

        let response = await fetch(
            "https://open.er-api.com/v6/latest/EUR"
        );

        let data = await response.json();

        if (!response.ok || data.result !== "success") {
            throw new Error("Unable to retrieve exchange rates");
        }

        let rate = data.rates[currency];

        let convertedTotal = total * rate;

        document.getElementById("result").innerText =
            "Total: " + convertedTotal.toFixed(2) + " " + currency;

    } catch (error) {

        document.getElementById("result").innerText =
            "Currency conversion failed. Please try again.";
    }
}