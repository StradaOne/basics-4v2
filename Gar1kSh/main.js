const patternRegexp = /^\+37|4\d{12}$/;

const phoneBook = {
  list: {
    "Natali Lopuhova": "+375291234564",
    Vadim: "+375336116111",
    Lena: "+371298202906",
    Roman: "+375450437701",
  },
  ShowList() {
    console.log(this.list);
  },
  addList(name, number) {
    if (patternRegexp.test(number)) {
      if (name in this.list && Object.values(this.list).includes(number)) {
        console.log(`This contact:\n${name} ${number} already added.`);
      } else {
        console.log(`This contact:\n${name} ${number} added.`);
        this.list[name] = number;
      }
    } else {
      console.log(`Incorrect number format:\n ${name} ${number} \n`);
    }
  },
  deleteList(name) {
    if (name in this.list) {
      delete this.list[name];
      console.log(`This contact:\n${name} deleted.`);
    } else {
      console.log(`${name} doesn't exist in the database.`);
    }
  },
  editList(name, number) {
    if (patternRegexp.test(number)) {
      if (name in this.list || Object.values(this.list).includes(number)) {
        console.log(`This contact:\n${name} ${number} edited.`);
      }
      this.list[name] = number;
    }
    return null;
  },
  outputList(name, number) {
    for (const name in this.list) {
      console.log(`${name} - ${this.list[name]}`);
    }
  },
};

phoneBook.editList("Vadim", "+375336666666");
phoneBook.ShowList();
phoneBook.addList("Ben Larsson", "+375863627323");
phoneBook.ShowList();
phoneBook.deleteList("Lena");
phoneBook.ShowList();
phoneBook.deleteList("Ira");
phoneBook.ShowList();
phoneBook.outputList();
