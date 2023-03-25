function calc(operation, a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Калькулятор складывает числа, а не то, что вы подумали");
    return;
  }
  switch (operation) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multi":
      return a * b;
    default:
      console.log("Просим вводить вас валидные данные");
  }
}

let result = calc("substract", "2", 5);
console.log(
  result ||
    "Используйте функцию только с этими операциями : add, substract, multi"
);
