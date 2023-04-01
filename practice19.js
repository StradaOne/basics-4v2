// const list = {
//     "create a new practice task": "In Progress", 
// 	"make a bed": "Done", // задача "заправить кровать" в статусе "Готово"
// 	"write a post": "To Do",
// };

// // function changeStatus(name,status){
// //     list[name] = status;
// // }

// // function addTask(name){
// //    list[name] = '';
// // }

// // function deleteTask(key) {
// //     delete list[key];
// // }

// let counter = 0;
// function showList(){
//     for (let prop in list){
//         console.log("Todo:" + prop ) ;
//     }
// }
// showList()

// // changeStatus("create a new practice task","Done");
// // addTask(['have a walk']); // добавляет новую задачу
// // console.log(list);
// // deleteTask('have a walk'); // удаляет задачу
// console.log(list);

var menu = {
    width: 300,
    height: 200,
    title: "Menu"
  };
  
  var counter = 0;
  
  for (var key in menu) {
    counter++;
  }
  
  alert( "Всего свойств: " + counter );
