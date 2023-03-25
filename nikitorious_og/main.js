
let operation = prompt('введите aad, multi или subtract  ', 'add, multi, subtract');
let a = +prompt('введите первое значение', '');
let b = +prompt('введите второе значение', '');

switch (operation) {
  case 'add':
    console.log(a + b);
    break;
  case 'multi':
    console.log(a * b);
    break;
  case 'subtract':
    console.log(a - b);
    break;
  default:
    console.log('try again')
}


