const phoneBook = {
    list: {
        "Kirill": 89151001234,
        "Gleb": 89151005678,
        "Oleg": 89151009012,
        "Ivan Ivanov": 89151003456
    },
    add(name, number) {
        this.list[name] = number;
    },
    delete(name) {
        delete this.list[name];
    },
    log() {
        console.log(this.list);
    }
};

phoneBook.log();
phoneBook.add("Ivan", 89151005689);
phoneBook.log();
phoneBook.delete("Gleb");
phoneBook.log();

