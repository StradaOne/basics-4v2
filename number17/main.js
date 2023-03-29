const phoneBook = {
    list: {
        "Kirill": 89151001234,
        "Gleb": 89151005678,
        "Oleg": 89151009012,
        "Ivan Ivanov": 89151003456
    }
};

for (name in phoneBook.list) {
    console.log(name + '-' + phoneBook.list[name]);
}

