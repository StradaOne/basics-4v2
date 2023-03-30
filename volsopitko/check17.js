"use strict";

const morning = "Good morning!";

const phoneBook = {
	list:{
		"Mikle": 89189188918,
		"Jhon": 999999,
		"Kate": 777777,
		"firstNumber": 20,
		"secondNumber": 30,
		morning
	},

	addContact(newContact, newNumber) {
		for (const name in this.list) {
			if (name === newContact) {
				console.log('Такой контакт уже есть');
				return;
			} else {
				this.list[newContact] = newNumber;
			}
		}
	}
}

phoneBook.addContact("Jhon", 123);
phoneBook.addContact("Steve", 333);

for (const name in phoneBook.list) {
	console.log(name + " - " + phoneBook.list[name]);
}

