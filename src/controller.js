import Project from "./project";
import Todo from "./todo";
import DOM from "./handleDom"
//import {openInputForm} from "./handleDom"


function getInputData() {
    let title = document.querySelector("#ttitle").value 
    let description = document.querySelector("#tdescription").value
    let dueDate = document.querySelector("#tdueDate").value
    let priority = document.querySelector("#tpriority"). value

    console.log({title, description, dueDate, priority})

    return ({title, description, dueDate, priority})
}


export  function controller(project, todo)  {
  let defaultProject = new Project("Default")


   // document.querySelector(".new-todo").addEventListener("click", openInputForm)

    document.querySelector("#submit-form").addEventListener("click", ()=>{
      let res =   getInputData();
      let newTask = new Todo(res.title, res.description, res.dueDate, res.priority)
      console.log(newTask)
      defaultProject.add(newTask)
      console.log(defaultProject)
    })

    DOM.pipi();





    

}

