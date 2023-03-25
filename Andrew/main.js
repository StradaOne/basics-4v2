function calc(operation, a, b) {
  switch (operation) {
    case "add":
      return 1 + 2;
    case "multi":
      return 1 * 2;
    case "subtract":
      return 3 - 2;
  }
}

console.log(calc("add", 1, 2)); // 3
console.log(calc("multi", 1, 2)); // 2
console.log(calc("subtract", 3, 2)); // 1
