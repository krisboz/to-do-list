import Todo from "./todo"


const example1 = new Todo("Make the thing", "Explanation of how to do the thing", "30.13.1997", "standard")
const example2 = new Todo("Did the thing", "Explanation of how I did the thing", "15.08.1999.", "standard")
const example3 = new Todo("Test the thing", "Explanation of how to test the thing", "25.02.1997.", "standard")
const example4 = new Todo("Test again the thing", "Explanation of how I again the thing", "01.11.2022.", "standard")



let Model =  {
    currentSelection: "home",

    home: [example1, example2, example3, example4],
    today:[example3, example1],
    notes:["Jebanje mame", "U pičku materinu"],
    projects: {
        "kiki":[example2, example1, example3],
        "pipi":[example1, example2]
    },


    addTask(project, task){
        this.projects[`${project}`].push(task)
        console.log(this.projects.project)
    },

    addProject(name){
        if(!this.projects.hasOwnProperty(name)) {
            this.projects[`${name}`] = [];
        }

    },        


    changeCurrSelection(arg){
        this.currentSelection = arg;
    }

}

export default Model

