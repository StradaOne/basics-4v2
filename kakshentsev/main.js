function calc(operation, a, b) {
  switch (operation) {
    case "add":
      return a + b;
      break;
    case "substract":
      return a - b;
      break;
    case "multi":
      return a * b;
      break;
    default:
      console.log("Просим вводить вас валидные данные");
  }
}

let result = calc("substract", 2, 5);
console.log(
  result ||
    "Используйте функцию только с этими операциями : add, substract, multi"
);
