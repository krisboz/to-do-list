import Project from "./project";
import Todo from "./todo";
import DOM from "./handleDom"
import Model from "./model"
//import {openInputForm} from "./handleDom"


function getInputData() {
    let title = document.querySelector("#ttitle").value 
    let description = document.querySelector("#tdescription").value
    let dueDate = document.querySelector("#tdueDate").value
    let priority = document.querySelector("#tpriority"). value

    return ({title, description, dueDate, priority})
}

const addProjectToModel = (name) => {
  if(!Model.hasOwnProperty(`${name}`)) {
    Model[`${name}`] = [];
    console.log(Model)
  } else alert("Project already exists")
}


//Grabs the appropriate array from model based on currSel
const getCurrentModelSelection = () => {
  if(Model[`${Model.currentSelection}`]) {
    return (Model[`${Model.currentSelection}`])
  } else {
    return (Model.projects[`${Model.currentSelection}`])
  }
}



export  function controller(project, todo)  {
  DOM.initialRender(Model.currentSelection);

   //Input form event listener
    document.querySelector("#submit-form").addEventListener("click", ()=>{
      let res =   getInputData();
      let target = getCurrentModelSelection();
      let newTask = new Todo(res.title, res.description, res.dueDate, res.priority)
      target.push(newTask)
      DOM.renderTasks(target)
      //Add it to the model
      
      DOM.toggleInputForm();
      console.log(Model)
    })


    //Event listener for adding a new project
    document.querySelector(".new-project").addEventListener("click", (e) =>{
     const form =  document.querySelector(".project-form");
     form.style.visibility = "visible"
     form.addEventListener("click", (e)=>{
    if(e.target.type === "submit"){
      let text = document.querySelector(".input-project-name")
      if(text.value !== "") {
        form.style.visibility = "collapse"
        Model.addProject(text.value)
        DOM.renderProjects()
        console.log(Model.projects)
        text.value = ""

      }
    }})});


    //Event listener for adding new Task
    document.querySelector(".nav-buttons").addEventListener("click", (e)=>{
      //console.log(e.target.parentNode.className)
      switch(e.target.parentNode.className) {
        case "new-todo":
          DOM.toggleInputForm();
          break;
        case "notifications":
          DOM.toggleInputForm();
          break;
        case "show-info":
          console.log("show-info")
      }
    })


    //Event listener for sidebar that changes current selection
    //and displays the TODOS
    document.querySelector(".sidebar").addEventListener("click", (e)=>{
      if(e.target.classList.contains("sidebar-section")) {
        //Handles the predefined Home, Today and Notes
        Model.changeCurrSelection(e.target.classList[0])
        if(Model.currentSelection === "notes") {
          //TODO Notes
          console.log("It was the notes")
        } else {
            DOM.renderTasks(Model[`${Model.currentSelection}`])
        }


      }else if (e.target.parentNode.classList.contains("project")){
        //Handles the custom made Projects
        console.log(e.target.parentNode.id)
        Model.changeCurrSelection(e.target.parentNode.id)
        DOM.renderTasks(Model.projects[`${Model.currentSelection}`])
        //Set it as the current selection
        //Render the Tasks
      }
    })

    //handle dates


    //handle priority


    //  Editing and deleting tasks

    //Deleting projects
    document.querySelector(".act-proj-cont").addEventListener("click", e=> {
      if(e.target !== null) {
        console.log(e.target.parentNode)
      }
      
    })




    // Pie chart in projects


    //Render tasks based on the getModelSelection function




const example5 = {
  title:"Test again the thing",
  description:"Explanation of how I again the thing",
  dueDate:"30.03.1993.",
  priority:"standard"
}





document.querySelector(".projects").addEventListener("click", (e)=>{
  //console.log(e.target.tagName)
})
}

