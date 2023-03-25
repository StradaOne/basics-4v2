function calс(a, b, operation) {
    switch (operation) {
        case "add":
            return a + b;
        case "multi":
            return a * b;
        case "subtract":
            return a - b;
        default: 
            return "Некорректный ввод данных. плак"
    }
}