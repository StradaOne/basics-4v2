"use strict";

function calc(a, b, operation) {

	switch(operation) {
		case 'add':
			console.log(a + b);
			break;

		case 'multi':
			console.log(a * b);
			break;

		case 'substract':
			console.log(a - b);
			break;

		default:
			console.log('Недопустимое значение');
	}
}

calc(4, 1, 'multi');
calc(3, 2, 'substract');
calc(2, 3, 'add');
calc(1, 4, 'выф');