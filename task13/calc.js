function calc(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
        case 'subtract':
            return a - b;
        case 'multi':
            return a * b;
        default:
            return null;
    }
}

console.log(calc("add", 5, 3))