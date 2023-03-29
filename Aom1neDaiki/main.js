const test = {
	phoneBook: {
		'к1': 123456789,
		'к2': 111123489
	},
	add(name, number) {
		this.phoneBook[name] = number;
	},
	del(name) {
		delete this.phoneBook[name];
	}
};


test.add('к3', 9876543212);
test.del('к2');
console.log(test.phoneBook);