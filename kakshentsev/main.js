function calc(operand, operator1, operator2) {
  if (typeof operator1 !== "number" || typeof operator2 !== "number") {
    console.log("Калькулятор складывает числа, а не то, что вы подумали");
    return;
  }
  switch (operation) {
    case "add":
      return operator1 + operator2;
    case "substract":
      return operator1 - operator2;
    case "multi":
      return operator1 * operator2;
    default:
      console.log("Просим вводить вас валидные данные");
  }
}

let result = calc("substract", "2", 5);
console.log(
  result ||
    "Используйте функцию только с этими операциями : add, substract, multi"
);
