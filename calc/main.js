function calc(operation, a, b) {
//     if (operation === 'add') {
//         return console.log(a+b);
//     } else if (operation === 'multi') {
//         return console.log(a*b);
//     } else if (operation === 'subtract') {
//         return console.log(a-b);
//     }
        switch(operation) {
            case 'add':
                console.log(a+b);
                break;
            case 'multi':
                console.log(a*b);
                break;
            case 'subtract':
                console.log(a-b);
                break;
        
        }
}

calc('add', 1, 2);
calc('multi', 1, 2);
calc('subtract', 3, 2);


