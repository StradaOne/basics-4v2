

function calc(operation, a, b) {
    if (operation == 'add' ) {
        return a + b;
    }
    if (operation == 'multi' ) {
        return a * b;
    }
    if (operation == 'subtract' ) {
        return a - b;
        
    }
} 

console.log(calc('add', 1, 2))  // - возвращает 3
console.log(calc('multi', 1, 2))  // - возвращает 2
console.log(calc('subtract', 3, 2))  // - возвращает 1



function calcul(operation, a, b) {
    switch (operation) {
        case 'add': return a + b
        case 'multi': return a * b   
        case 'subtract': return a - b
    }    
} 

console.log(calcul('add', 1, 2))  // - возвращает 3
console.log(calcul('multi', 1, 2))  // - возвращает 2
console.log(calcul('subtract', 3, 2))  // - возвращает 1



