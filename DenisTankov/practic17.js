const phoneBook = {
  list: {
    John: 123456789,
    'Jane Doe': 656565,
    'Jim Smith': 111111111,
  },
  add(name, number) {
    this.list[name] = number;
  },
  delete(name) {
    delete this.list[name];
  },
};

phoneBook.add('Sarah Johnson', 123123123);
phoneBook.delete('John');
// console.log(JSON.stringify(phoneBook));
// console.log("Jane Doe" in phoneBook.list);

const John = 'John';
const Pete = 'Pete';
const list1 = { John, Pete };
// console.log(list1);

const phoneBook1 = { list1 };
console.log(phoneBook1);
