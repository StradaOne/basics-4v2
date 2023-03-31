const todoList = {
  list: {
    "go to the gym": "Done",
    "Learn English": "To Do",
    "Home work": "In progress"
  },
  changeStatus(name, status) {
    if (name in this.list) {
      this.list[name] = status;
    } else {
      console.log('Такой задачи нет в списке!');
    };
  },
  addTask(name) {
    if (name in this.list) {
      console.log('Эта задача уже есть в списке!');
    } else {
      this.list[name] = "To Do";
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
    if (todoList.list[name] === "To Do") {
      strToDo +=name + ':' + todoList.list[name] + '\n';
    } else if (todoList.list[name] === "Done") {
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
todoList.addTask("Walk white my frends", "To Do");
todoList.changeStatus("Walk white my frends", "Done");
todoList.changeStatus("Home work", "To Do");
todoList.showList();




