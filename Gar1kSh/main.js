const phoneBook = {
    list: {
    "Natali Lopuhova": 291234564,
    "Vadim": 336116111,
    "Lena": 298202906,
    "Roman": 4504377018,
    },
    ShowList() {
        console.log(this.list);
      },
    addList(name, number) {
        this.list[name] = number;
    }
};

phoneBook.ShowList();
phoneBook.addList('Ben Larsson', 63627323);
phoneBook.ShowList();

