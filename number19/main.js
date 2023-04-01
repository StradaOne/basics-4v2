const todotask = "To Do";
const donetask = "Done";
const inprogress = "In progress";

const todoList = {
  list: {
    "go to the gym": donetask,
    "Learn English": todotask,
    "Home work": inprogress
  },
  changeStatus(name, status) {
    if (status === todotask || status === donetask || status === inprogress) {
      if (name in this.list) {
        this.list[name] = status;
      } else {
        console.log('Такой задачи нет в списке!');
      };
    } else {
      console.log('Введите корректный статус!');
    };
  },
  addTask(name) {
    if (name in this.list) {
      console.log('Эта задача уже есть в списке!');
    } else {
      this.list[name] = todotask;
    };
  },
  deleteTask(name) {
    if (name in this.list) {
      delete this.list[name];
    } else {
      console.log('Такой задачи нет в списке!');
    };
  },
  showList() {
    showListfunc();
  }
};

function showListfunc() {
  let strToDo = '';
  let strInProgress = '';
  let strDone = '';

  for (const name in todoList.list) {
    if (todoList.list[name] === todotask) {
      strToDo +=name + ':' + todoList.list[name] + '\n';
    } else if (todoList.list[name] === donetask) {
      strDone += name + ':' + todoList.list[name] + '\n';
    } else {
      strInProgress +=name + ':' + todoList.list[name] + '\n';
    };
  };
  console.log(strToDo);
  console.log(strDone);
  console.log(strInProgress);
};



todoList.deleteTask("Learn English");
todoList.addTask("Walk white my frends");
todoList.addTask("Walk white my frends");
todoList.changeStatus("Walk white my frends", donetask);
todoList.changeStatus("Home work", todotask);
todoList.changeStatus("Home work", "Hello");
todoList.changeStatus("Home work", donetask);
todoList.addTask("Cinema time");
todoList.showList();




