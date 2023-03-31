const todoList = {
  list: {
    "go to the gym": "Done",
    "Learn Engish": "To Do",
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
    switch (todoList.list[name]) {
      case "To Do":
        strToDo += name + '\n';
        break;
      case "In progress":
        strInProgress += name + '\n';
        break;
      case "Done":
        strDone += name + '\n';
        break;
      default:
        break;
    };
  };
  if (strToDo === '') {
    console.log('Nothing is To Do')
  } else {
    console.log("To Do:")
    console.log(strToDo);
  };
  if (strInProgress === '') {
    console.log('Nothing In progress')
  } else {
    console.log("In progress:")
    console.log(strInProgress);
  };
  if (strDone === '') {
    console.log('Nothing is Done')
  } else {
    console.log("Done:")
    console.log(strDone);
  };
};

todoList.showList();




