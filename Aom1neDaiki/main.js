const phoneBook = {
	'К-1': '+7-921-32-42',
	'К': '+7-235-32-42',
	'К-3': '+7-923-22-65',
	'К-4': '+7-818-66-66',
	'К-5': '+7-951-45-15',
}
console.log(phoneBook["К-3"]);
phoneBook["К-6"] = '+7-926-31-16';
console.log(phoneBook);
phoneBook.Контакт = '+7-926-41-16';
console.log(phoneBook);
delete phoneBook["К-5"];
console.log(phoneBook);
console.log(phoneBook["К-4"]);