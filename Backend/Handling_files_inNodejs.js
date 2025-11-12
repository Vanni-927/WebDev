const fs = require('fs');
const filePath = "./tasks.json";


const loadTasks = () => {   //this can have many errors so we need to use try catch statements.
    try {
        const dataBuffer = fs.readFileSync(filePath);                               //first reading from the file where everything is stored.
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);  
        
    } catch (error) {
        return [];     
    }
}


const saveTasks = (loadedTasks) => {
    const dataJSON = JSON.stringify(loadedTasks);
    fs.writeFileSync(filePath, dataJSON);
}


const command = process.argv[2];                   //used to access commandline arguments when passed
const argument = process.argv[3];


const addTask = (addedTask) => {
  const loadedTasks = loadTasks();
  loadedTasks.push({ addedTask });
  saveTasks(loadedTasks);
  console.log("Task added :", addedTask);
};



const listTasks = () => {
    const loadedTasks = loadTasks();
    loadedTasks.forEach((listedTask, index) => {
        console.log(`${index + 1} - ${listedTask.addedTask}`);
    });
}


const removeTasks = (index) => {
    const loadedTasks = loadTasks();
    const removedTask = loadedTasks.splice(index - 1, 1)
    saveTasks(loadedTasks);
    console.log("Removed task :", removedTask[0].addedTask);
}





if (command === "add") {
    addTask(argument);
}
else if (command === 'list') {
    listTasks();
}
else if (command === 'remove') {
    removeTasks(parseInt(argument));
}
else {
    console.log("Command not found!");
}