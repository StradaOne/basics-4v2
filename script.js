//10
let answer = prompt("Какое «официальное» название JavaScript?");
if(answer == 'ECMAScript') {
	alert("Верно!");
} else{
	alert("Не знаете? ECMAScript!")
}

let number = prompt("Число");
if (number > 0){
	alert("1");
} else if(number == 0){
	alert("0");
} else{
	alert("-1");
}

result = (a + b < 4) ? 'Мало' : 'Много';

let message = (login == 'Сотрудник') ? 'Привет':
	(login == 'Директор') ? 'Здравствуйте':
	(login == '') ? 'Нет логина':
	'';

if (age >= 14 && age <= 90);
if (!(age >= 14 && age <= 90));
let userName = prompt("Кто там?", '');
if (userName === 'Админ') {
  let pass = prompt('Пароль?', '');
  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }
} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}

//11
function checkAge(age){
	if(age < 18){
		console.log("you are not allowed");
	} else{
		console.log("you are welcome!")
	}
}
checkAge(20);

function checkAge(age) {
	if (age >= 18) { return true;} 
	else { return confirm('А родители разрешили?');} 
}
checkAge(20);


function сalc(operation, a, b){
	if(operation == 'add'){
		return a + b;
	} else if(operation == 'multi'){
		return a * b;
	} else if(operation == 'subtract'){
		return a - b;
	}
}
let resultDay11 = сalc('subtract', 3, 2);
console.log(resultDay11);

//12
function сalc(operation, a, b){
	switch(operation){
		case 'add':
			return a + b;
			break;
		case 'multi':
			return a * b;
			break;
		case 'subtract':
			return a - b;
			break;
	} 
}
let resultDay12 = сalc('subtract', 3, 2);
console.log(resultDay12);