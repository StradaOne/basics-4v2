function isNumber(operand) {
  return typeof operand === 'number' && !isNaN(operand) && isFinite(operand)
}

function calc(operatinon, a, b) {
  if (isNumber(a) && isNumber(b)) {
    switch (operatinon) {
      case 'add':
        return a + b;
      case 'multi':
        return a * b;
      case 'subtract':
        return a - b;
    }
  }
  else {
    return 'Something went wrong'
  }
}
