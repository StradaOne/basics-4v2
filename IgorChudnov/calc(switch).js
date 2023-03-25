// Объявление функции
function calc(oper, a, b) {

    // Ввод оператора
    oper = prompt ('Type in operation! (add, multi, substract)');

    // Проверка оператора + кнопка esc
    switch (oper){
        case 'add':
        case 'multi':
        case 'substract':
            break;
        case null:
            alert ('Canceled!');
            return;
        default:
            alert ('Wrong operator!');
            return;
    }

    // Ввод первого аргумента + кнопка esc
    a = prompt ('First argument?');
    if (a === null) {
        alert ('Canceled!');
        return;
    }

    // Приведение к числу
    a = +a;

    // Проверка правильности ввода
    if (String(a) === 'NaN') {
        alert('Wrong input type!');
        return;
    }

    // Ввод второго аргумента + кнопка esc
    b = prompt ('Second argument?');
    if (b === null) {
        alert ('Canceled!');
        return;
    }

    // Приведение к числу
    b = +b;

    // Проверка правильности ввода
    if (String(b) === 'NaN') {
        alert('Wrong input type!');
        return;
    }

    // Объявление переменной результата
    let result;

    // Основные вычисления
    switch (oper){
        case 'add':
            result = a + b;
            break;
        case 'multi':
            result = a * b;
            break;
        case 'substract':
            result = a - b;
            break;
    }

    // Вывод результата
    alert (result)
}

calc ()