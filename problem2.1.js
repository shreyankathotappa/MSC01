// Use text boxes to get a,b and n.
function sumMultiples(a, b, n) {

    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum = sum + i;
        }
    }

    return sum;
}

function calculate() {

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let n = document.getElementById("n").value;

    alert(sumMultiples(a, b, n));
}