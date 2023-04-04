const list = {
  "create a new practice task": "In Progress",
  "make a bed": "Done",
  "write a post": "To Do",
};

function addTask(key) {
  if (!Object.keys(list).includes(key)) {
    list[key] = "To Do";
  }
}
addTask("walk with dog");
addTask("make a dinner");
console.log(list);

function changeStatus(key, status) {
  if (Object.keys(list).includes(key)) {
    list[key] = status;
  }
}
changeStatus("make a bed", "In Progress");
changeStatus("walk with dog", "Done");
changeStatus("make a dinner", "Done");

function deleteTask(key) {
  if (Object.keys(list).includes(key)) {
    delete list[key];
  }
}
console.log(list);

function showTasksByStatus(status) {
  let counter = 0;
  for (const value of Object.values(list)) {
    if (value === status) {
      counter++;
    }
  }
  // console.log(counter)
  if (counter === 0) {
    console.log(`Nothing to ${status}`);
    return `Nothing to ${status}`;
  }
  // выводит задачи по статусу
  for (const key of Object.keys(list)) {
    const statusByKey = list[key];
    if (status === statusByKey) {
      console.log(`${key}`);

      return key;
    }
  }
}

function showList() {
  showTasksByStatus("To Do");
  showTasksByStatus("In Progress");
  showTasksByStatus("Done");
}

showList();
