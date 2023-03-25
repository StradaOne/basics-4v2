
function newCalc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            console.log('Такую операцию пока не прописал');
    }
}

console.log(newCalc('add', 1, 2));
console.log(newCalc('multi', 1, 2));
console.log(newCalc('subtract', 3, 2));
console.log('test')