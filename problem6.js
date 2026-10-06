// Calculate the total cost of products in the basket

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

alert(totalCost(basket, prices));