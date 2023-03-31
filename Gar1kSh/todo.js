const progressTask = "In Progress";
const statusTask = "Done";
const toDoTask = "To Do";
const nothingTask = "Nothing is done";
let stringTask = "";

const ToDoList = {
  list: {
    "create a new practice task": progressTask,
    "make a bed": toDoTask,
    "write a post": toDoTask,
    "learning day task": progressTask,
  },
  addTask(name, status) {
    if (name !== stringTask && name !== null && name !== undefined) {
      if (name in this.list && Object.values(this.list).includes(status)) {
        console.log(`This task:\n${name} ${status} already done.`);
      } else {
        console.log(`This task:\n${name} ${status} added.`);
        this.list[name] = status;
      }
    } else {
      console.log(`Incorrect name format:\n ${name} \n`);
    }
  },
  deleteTask(name) {
    if (name in this.list) {
      delete this.list[name];
      console.log(`This task:\n${name} deleted.`);
    } else {
      console.log(`${name} doesn't exist in the database.`);
    }
  },
  editTask(name, status) {
    if (name in this.list || Object.values(this.list).includes(status)) {
      console.log(`This task:\n${name} ${status} edited.`);
    }
    this.list[name] = status;
  },
  ShowListTodo() {
    ShowListSort();
  },
};

function ShowListSort() {
  let strProgressIn = "";
  let strToDo = "";
  let strDone = "";
  for (const name in ToDoList.list) {
    if (ToDoList.list[name] === progressTask) {
      strProgressIn += name + "\n";
    } else if (ToDoList.list[name] === toDoTask) {
      strToDo += name + "\n";
    } else if (ToDoList.list[name] === statusTask) {
      strDone += name + "\n";
    }
  }
  console.log("In progress:");
  console.log(strProgressIn);
  console.log("To Do:");
  console.log(strToDo);
  console.log("Done:");
  console.log(strDone);
  if (strDone === stringTask) {
    console.log(nothingTask);
  }
}

ToDoList.addTask();
ToDoList.editTask("make a bed", progressTask);
ToDoList.addTask("reading book", statusTask);
ToDoList.ShowListTodo();
ToDoList.deleteTask("write a post");
ToDoList.ShowListTodo();
