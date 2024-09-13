function isFibonacci(num) {
    if (num <0) return false;
    let a=0, b=1;

    while (a <=num) {
        if (a === num) {
            return true;
        }
        let temp = a + b;
        a = b;
        b = temp;
    }

    return false;
}
const numberToCheck = 13

if(isFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence a sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à seuqencia de Fibonacci`);
}