const inProgress = "In progress"
const Done = "Done"
const toDo = "To Do"
const priorityHigh = "high"
const priorityLow = "low"

const tasks = [ 
	{name: 'create a post', status: inProgress, priority: priorityLow}, 
  {name: 'test', status: Done, priority: priorityHigh},
  {name: 'homework', status: toDo, priority: priorityHigh} 
];

function addTask(taskName){
    let flag = false
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].name === taskName || typeof taskName != 'string'){
            flag = true
            
        }
    }
    if(flag === false){
        const newTask = {
            name:taskName,
            status: toDo,
            priority:priorityLow
        }
        tasks.push(newTask)
    }
}

function deleteTask(taskName){
    let index = tasks.findIndex(el => el.name === taskName)
    tasks.splice(index,1)  
}

function changeStatus(taskName, status, priority){
    let index = tasks.findIndex(el => el.name === taskName)
    tasks[index].name = taskName
    tasks[index].status = status
    tasks[index].priority = priority
}

function shoeListStatus(nameStatus){
    console.log(`${nameStatus}:`)
    let flag = false
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].status === nameStatus ){
            console.log(`\t${tasks[i].name} \n\t\tpriority: ${tasks[i].priority}`)  
            flag = true
        }
    }
    if(flag===false){
        console.log(`\t -`)
    }
}

function showList(){
    shoeListStatus(toDo)
    shoeListStatus(inProgress)
    shoeListStatus(Done)
    
}
