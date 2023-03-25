function calc(operatinon, a, b) {
  switch (operatinon) {
    case 'add':
      return a + b
      break
    case 'multi':
      return a * b
      break
    case 'subtract':
      return a - b
      break
  default:
    console.log('Проверьте, вводите ли вы правильные данные');
  }
}
