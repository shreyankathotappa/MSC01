// Find the sum of all multiples of a or b below n

function sumMultiples(a, b, n) {

    let sum = 0;

    for (let i = 1; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum = sum + i;
        }
    }

    return sum;
}

alert(sumMultiples(4, 6, 500));