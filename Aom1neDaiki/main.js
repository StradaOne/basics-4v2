const test = {
	'boolean-true': true,
	'boolean-false': false,
	'array': [1, 2, 3, 4, 5, 6],
	'number': 1 + 2 + 3 + 4 + 5 + 6,
	'null': null,
	'undefined': undefined,
	'phoneBook': {
		'К-1': '+7-921-32-42',
		'к2': '+7-235-32-42',
		'К-3': '+7-923-22-65',
		'К-4': '+7-818-66-66',
		'К-5': '+7-951-45-15',
	},
	log() {
		console.log(this.phoneBook)
	}

}
console.log(test.phoneBook["К-3"]);
test.phoneBook["К-6"] = '+7-926-31-16';
console.log(test);
test.phoneBook.к2 = '+7-926-41-16';
console.log(test);
delete test.phoneBook["К-5"];
console.log(test);
test.log();