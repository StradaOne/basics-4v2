function calc(operation, a,b) {
    switch (operation) {
        case ('add'): 
        return a + b
        break;
        case ('multi'):
        return a * b
        break;
        case ('subtrack'):
        return a - b
        break;
}
}

console.log(calc('subtrack', 3, 2));
