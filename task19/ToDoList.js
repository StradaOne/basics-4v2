const toDo = {
    list: {
        "Creat post": "Done",
        "Write letter": "In Progress"
    },
    addTask(nameTask, status) {
        if (!(nameTask in this.list)) {
            this.list[nameTask] = status
        }
    },
    changeStatus(nameTask, status) {
        if (nameTask in this.list) {
            this.list[nameTask] = status
        }
    },
    delete(nameTask) {
        delete this.list[nameTask]
    },
    showList() {
        let check = true
        console.log("To do:")
        for (let task in this.list) {
            if (this.list[task] === "to do") {
                console.log(task)
                check = false
            }
        }
        if (check) {
            console.log("-")
            check = true
        }
        console.log("In Progress:")
        for (let task in this.list) {
            if (this.list[task] === "In Progress") {
                console.log(task)
                check = false
            }
        }
        if (check) {
            console.log("-")
            check = true
        }
        console.log("Done:")
        for (let task in this.list) {
            if (this.list[task] === "Done") {
                console.log(task)
                check = false
            }
        }
        if (check) {
            console.log("-")
            check = true
        }
    }
}
toDo.addTask("sleep", "to do")
toDo.addTask("sleep", "Done")
toDo.addTask("run", "In Progress")
toDo.changeStatus("run", "to do")
toDo.addTask("meet with friends", "In Progress")
toDo.delete("meet with friends")
toDo.showList()