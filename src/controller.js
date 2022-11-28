import Project from "./project";
import Todo from "./todo";
import DOM from "./handleDom"
import Model from "./model"
import  {format, getDate} from "date-fns"

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


//SELECTS TASK ARRAY BASED ON CURRENT SELECTION
const getCurrentModelSelection = () => {
  if(Model[`${Model.currentSelection}`]) {
    return (Model[`${Model.currentSelection}`])
  } else {
    return (Model.projects[`${Model.currentSelection}`])
  }
}



export  function controller(project, todo)  {
  DOM.initialRender(Model.currentSelection);
  DOM.renderTasks(Model[`${Model.currentSelection}`])

  console.log(format(Date.now(), "yyyy-MM-dd"))

  Model.populateToday()

   //Input form event listener
    document.querySelector("#submit-form").addEventListener("click", ()=>{
      let res =   getInputData();
      let target = getCurrentModelSelection();
      let newTask = new Todo(res.title, res.description, res.dueDate, res.priority, false)
      console.log(res.dueDate)
      target.push(newTask)
      Model.populateImportant()
      DOM.renderAllPriorites();

      DOM.renderTasks(target)
      //Add it to the model
      
      DOM.toggleInputForm();
    })


    //EVENT LISTENER FOR ADDING A NEW PROJECT
    document.querySelector(".new-project").addEventListener("click", (e) =>{
     const form =  document.querySelector(".project-form");
     form.style.visibility = "visible"
     form.addEventListener("click", (e)=>{
    if(e.target.type === "submit"){
      let text = document.querySelector(".input-project-name")
      if(text.value !== "") {
        form.style.visibility = "collapse"
        Model.addProject(text.value.replace(/\s+/g, '-').toLowerCase())
        DOM.renderProjects()
        text.value = ""
      }
    }})});


    //EVENT LISTENER FOR ADDING A NEW TASK
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

    //NEW ADD BUTTON EVENT LISTENERS
    document.querySelector(".current-section").addEventListener("click", e=> {
      //console.log(e.target.closest(".new-todo"))
      if(e.target.closest(".new-todo")) {

        DOM.toggleInputForm()

      }
    })

    const getDateDifference = (dateOfTheTask) => {
      const today = Date.now()
      console.log(today)
    }

    getDateDifference();


    // HOME/TODAY/NOTES MENU EVENT LISTENERS
    document.querySelector(".top").addEventListener("click", (e) => {
      if(e.target.classList.contains("sidebar-section")) {
        //Handles the predefined Home, Today and Notes
        Model.changeCurrSelection(e.target.classList[0])
        if(Model.currentSelection === "today") {
          document.querySelector(".new-todo").style.visibility = "hidden"
          Model.populateToday()
          DOM.renderTasks(Model[`${Model.currentSelection}`])


        } else if(Model.currentSelection === "notes") {
          //TODO Notes
          console.log("It was the notes")
        } else {
            DOM.renderTasks(Model[`${Model.currentSelection}`])
            console.log("I'm the else")
            document.querySelector(".new-todo").style.visibility = "visible"

        }
        //TODO MAKE IT WAY MORE EFFECTIVE, RENDERING AND REMOVING THE ADD NTASK BUTTON
        //////////////TODO
        //DOM.toggleSidebarMenuClicked()
      }
    })

    //PROJECT EVENT LISTENERS
    document.querySelector(".projects-container").addEventListener("click", e => {
      const currId = e.target.closest(".project").id
      //RENDER PROJECTS
      if (e.target.nodeName === "DIV") {
        Model.changeCurrSelection(currId)
        DOM.renderTasks(Model.projects[`${Model.currentSelection}`])
        document.querySelector(".new-todo").style.visibility = "visible"
        //DELETE PROJECT
      } else if (e.target.nodeName === "SPAN") {
        if(confirm("Are you sure you want to delete the project?") == true) {
          delete Model.projects[`${currId}`]
          DOM.renderProjects()
          Model.populateImportant()
          DOM.renderAllPriorites();
        }

      }
    })



    //EVENTS FOR EACH AND EVERY TASK
    document.querySelector(".task-container").addEventListener("click", e => {
      const modelIdSearch = (id) => {
        let answer;
        getCurrentModelSelection().forEach(element => {
          if(element.id === id) {
            answer = element
          }
        });
      return answer
       }

       if(e.target.closest(".task") !== null) {
        const id = e.target.closest(".task").id
        //For rendering pie charts, determines the DOM target
        const pieId = Model.currentSelection
        const targetInModel = modelIdSearch(id);

        switch(e.target.nodeName) {
         case "INPUT":
           //CHECK IF TASK IS DONE AND MODIFY DATA ACCORDINGLY 
           switch(e.target.checked){
             case true: 
               targetInModel.done = true;
               DOM.renderPie(pieId, Model.getDonePercentage(getCurrentModelSelection()))
               break;
             case false:
                targetInModel.done = false;
                DOM.renderPie(pieId, Model.getDonePercentage(getCurrentModelSelection()))

               break;
           }
           Model.populateImportant()
           DOM.renderAllPriorites();
           break;
           //CHECK IF EDIT OR DELETE WAS PRESSED AND EDIT OR DELETE
           case "SPAN":
             switch(e.target.closest("div").className){
               case "edit":
                 console.log("Edit funkcija");
                 console.log(targetInModel)
                 break;
               case "delete":
                 let index = getCurrentModelSelection().indexOf(targetInModel);
                 getCurrentModelSelection().splice(index, 1)
                 DOM.renderTasks(getCurrentModelSelection())
                 DOM.renderPie(pieId, Model.getDonePercentage(getCurrentModelSelection()))
                 Model.populateImportant()
                 DOM.renderAllPriorites();
              //TODO MAKNIT MODEL.CURRENTSELECTION
                 break;
             }
             break
        }

       }

    })


    //Render tasks based on the getModelSelection function


}

