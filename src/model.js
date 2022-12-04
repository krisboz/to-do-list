import Todo from "./todo"
import  {format} from "date-fns"


const example1 = new Todo("Make the thing", "Explanation of how to do the thing", "1997-12-03", "standard")
const example2 = new Todo("Did the thing", "Explanation of how I did the thing", "1999-11-11", "standard")
const example3 = new Todo("Test the thing", "Explanation of how to test the thing", "1997-11-15", "standard")
const example4 = new Todo("Test again the thing", "Explanation of how I again the thing", "2022-03-11", "standard")
const example5 = new Todo("Make the thing", "Explanation of how to do the thing", "1997-12-03", "standard")
const example6 = new Todo("Did the thing", "Explanation of how I did the thing", "1999-11-11", "standard")
const example7 = new Todo("Test the thing", "Explanation of how to test the thing", "1997-11-15", "standard")
const example8 = new Todo("Test again the thing", "Explanation of how I again the thing", "2022-03-11", "standard")
const example9 = new Todo("Did the thing", "Explanation of how I did the thing", "1999-11-11", "standard")
const example10 = new Todo("Test the thing", "Explanation of how to test the thing", "1997-1-11", "standard")
const example11 = new Todo("Test again the thing", "Explanation of how I again the thing", "2022-03-11", "standard")
const example12 = new Todo("Test the thing", "Explanation of how to test the thing", "1997-11-15", "standard")
const example13 = new Todo("Test again the thing", "Explanation of how I again the thing", "2022-03-11", "standard")
const example14 = new Todo("Did the thing", "Explanation of how I did the thing", "1999-11-11", "standard")
const example15 = new Todo("Test the thing", "Explanation of how to test the thing", "1997-1-11", "standard")
const example16 = new Todo("Test again the thing", "Explanation of how I again the thing", "2022-03-11", "standard")


let Model =  {
    todayDate: format(Date.now(), "dd/MM/yyyy"),
    currentSelection: "home",
    important:[],
    home: [],
    today:[],
    notes:["Jebanje mame", "U pičku materinu"],
    projects: {
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
    },

    getDonePercentage(arr){
        //(valu/totalValue) * 100
        let value = 0
        const total = arr.length
        arr.forEach(element => {
           if (element.done === true) {
            value ++
           } else if (element.done === false) {

           }
        });
        let percentage = (value/total) * 100;

        return percentage

    },
 
    populateToday(){
        this.today = [];
        //All that are today
 
        Object.values(this.projects).forEach(el=> {
            el.forEach(el => {
                if(format(new Date(el.dueDate), "dd/MM/yyy") === this.todayDate) {
                    this.today.push(el);
                }
            });
        })
    
    },
     
        
    populateImportant(){
        this.important = []
        Object.values(this.projects).forEach(el=> {
            el.forEach(el=>{
                if(el.priority === "important" && el.done === false) {
                    this.important.push(el)
                }
            })
        })


    }
    //for sorting I need an array of dates and then arr.sort(compareAsc)
    //Calculate the difference in days between today and the assigned date
    // Order them in ascending order (die fruhest am erste)

}

export default Model

