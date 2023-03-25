function calc(operation, a, b) {
    if (operation === "add") {
        return a + b;
    } else if (operation === "multi") {
        return a * b;
    } else if (operation === "subtract") {
        return a - b;
    } else {
        return "Error. Something went wrong. but we still love you"
    }
}

console.log(calc("add", 2, 2)); //4
console.log(calc("multi", 2, 2)); //4
console.log(calc("subtract", 6, 2)); //4
console.log(calc("agtrgtrht", 2, 2)); //Error. Something went wrong. but we still love you

function calc(operation, a, b) {
   switch (operation) {
        case "add":
            return a + b;
        case "multi":
            return a * b;
        case "subtract":
            return a - b;
        default:
           return "Error. Something went wrong.";
    }
}

console.log(calc("add", 2, 2)); //4
console.log(calc("multi", 2, 2)); //4
console.log(calc("subtract", 6, 2)); //4
console.log(calc("asfqf", 2, 2)); //Error. Something went wrong. but we still love you