
function calc(a,b,operation) {
    switch (operation) {
        case 'add':
            return a + b;
            break;
        case 'multi':
            return a * b;
            break;
        case 'subtract':
            return a - b;
            break;      
    }   
}      
console.log(calc(2,3,'subtract'));
