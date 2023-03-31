const list = {
	"create a new practice task": "To Do", 
	"make a bed": "Done", 
	"do sport": "Done",
    "pet the cat": "To Do",
    "work on a diploma": "Done",
    "meet friends": "Done",
    "go grocery shopping": "Done",

    addTask(task){
        if(!(task in list)){
            list[task] = 'To Do'
        }
    },

    deleteTask(task){
        if((task in list)){
            delete list[task]
        }
    },

    changeStatus(task, status){
        if((task in list)){
            list[task] = status
        }
    },

    showList(){
        console.log("To Do: ")
        n = 0
        for (task in list){
            if(list[task] === 'To Do'){
                console.log(`    ${task}:`)
                n+=1
            }
        }
        if(n==0){
            console.log(`    -`)
        }
        console.log("In Progress: ")
        i = 0
        for (task in list){
            if(list[task] === 'In Progress' ){
                console.log(`    ${task}:`)
                i+=1
            }
        }
        if(i==0){
            console.log(`    -`)
        }
        console.log("Done: ")
        e=0
        for (task in list){
            if(list[task] === 'Done' ){
                console.log(`    ${task}:`)
                e+=1
            }
        }
        if(e==0){
            console.log(`    -`)
        }
    }
}

list.showList()
