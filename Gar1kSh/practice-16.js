const phoneBook = {
  list: {
  "Natali Lopuhova": 291234564,
  "Vadim": 336116111,
  "Lena": 298202906,
  "Roman": 4504377018,
  },
  showLog() {
    console.log(this.list);
  }

};

console.log(phoneBook);


// console.log(phoneBook.Vadim);
// // console.log(phoneBook["Natali Lopuhova"]);
// phoneBook["Ann"] = 375299919919;
// // console.log(phoneBook.Ann);
// delete phoneBook["Vadim"];
// phoneBook["Vadim"] = 131313131;
// phoneBook["Natali Lopuhova"] = 'not metadata';
// // console.log(phoneBook["Natali Lopuhova"]);


// const phoneBook = {
//   list: 
//       { // перенесли все контакты в свойство list
//         "John": 123456789,
//         "Jane Doe": 987654321,
//         "Jim Smith": 111111111
//       },
//   showLog() 
//       { // добавили метод log
//         console.log(this.list)
//       }
//   };

// phoneBook.showLog(); // its a phonebook!