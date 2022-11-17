import Model from "./model";

function initialLoad() {
    const app = document.querySelector(".app");

    const projectHTML = `                    <div class="project">
    <div class="project-title">Default</div>
    <div class="project-right"></div>
    <div class="pie-cont">
    <div class="pie "></div>
</div>
    <div class="delete-project"><span class="material-symbols-outlined">
        cancel
        </span></div>
</div>
` //još .clicked-project za odabrani

const taskHTML = `
<div class="task">
<div class="task-left">
 <div class="checkbox"><input type="checkbox" name="" id=""></div>
 <div class="title-and-date">
     <div class="task-title"> Wash the dishes</div>
     <div class="due-date">26.6.2022.</div>
 </div>
 <div class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quibusdam veritatis ipsa.</div>
</div>
<div class="task-right">
 <div class="edit">
     <button><span class="material-symbols-outlined">
         edit
         </span></button>
 </div>
 <div class="delete">
     <button><span class="material-symbols-outlined">
         delete
         </span></button>
 </div>
</div>


</div>`

    const navbar = ``;
    const sidebar = ``;
    const mainBody = ``;
}

const DOM = (()=>{
    const app = document.querySelector(".app");
    const templates = {
        inputForm: `    <div class="input-form">
        <form action="">
            <label for="ttitle">Title</label>
            <input type="text" id="ttitle" placeholder="Your task..">
    
            <label for="tdescription">Description <span class="optional">(optional)</span></label>
            <input type="text" id="tdescription" placeholder="Details (optional)">
    
            <label for="tdueDate">Due date <span class="optional">(optional)</span></label>
            <input type="date" name="dueDate" id="tdueDate">
    
            <label for="tpriority">Priority</label>
            <select name="priority" id="tpriority">
                <option value="important"> Important</option>
                <option value="standard" selected>Standard</option>
                <option value="optional"> Optional</option>
            </select>
    
            <button id="submit-form" type="button">Submit</button>
        </form>
    </div>`,
    
    }

    const toggleInputForm=()=>{
        const inputForm = document.querySelector(".input-form")
        if(inputForm.classList.contains("input-form-clicked")) {
            inputForm.classList.remove("input-form-clicked")
        } else {
            inputForm.classList.add("input-form-clicked")

        }
    }

    const renderNavbar=()=> {
        let navbarTemplate = `        <div class="navbar">
        <div class="logo">
            T<span class="material-symbols-outlined">
                radio_button_unchecked
                </span>
                 D<span class="material-symbols-outlined">
                        check_circle
                        </span>
        </div>
        <div class="nav-buttons">
            <button class="new-todo">
                <span class="material-symbols-outlined">
                    add
                    </span>
            </button>
            <button class="notifications">
                <span class="material-symbols-outlined">notifications</span>
            </button> 
            <button class="show-info">
                <span class="material-symbols-outlined">
                    info
                    </span>
            </button>
        </div> 
    </div>`

    app.insertAdjacentHTML("beforeend", navbarTemplate)
    }

    const renderSidebar=()=>{
        const sidebarTemplate = `
        <div class="sidebar">
            <div class="top">
                <div class="calendar">
                    <div class="month">September</div>
                    <div class="day">25</div>
                </div>
                <div class="upcoming-important"></div>
            </div>
            <div class="bot">
                <div class="projects">
               <div class="home sidebar-section">Home</div>
               <div class="today sidebar-section">Today</div>
               <div class="notes sidebar-section">Notes</div>
               <div class="projects-container">
               <div class="projects-header">
                    <h3>Projects  </h3> 
                    <button class="new-project">
                    <span class="material-symbols-outlined">
                        add
                        </span>
                    </div>
                    <div class="project-form">
                    <input type="text" class="input-project-name" placeholder="Project name">
                    <button class="add-project">Add</button>
                </div>
                <div class="act-proj-cont"></div>
                </div>
                </div>
            </div>
        </div>`

        app.insertAdjacentHTML("beforeend", sidebarTemplate)
        renderProjects();
    }

    const renderProject =(name)=>{
        const container =  document.querySelector(".act-proj-cont")
        let projectTemplate = `<div class="project" id="${name}">
        <div class="project-title">${name.replace(/-/g, ' ').replace(/^./, function(x){return x.toUpperCase()})}</div>
        <div class="project-right">
        <div class="pie-cont">
        <div class="pie" id="${name}pie"></div>
    </div>
        <div class="delete-project"><span class="material-symbols-outlined">
            cancel
            </span></div>
            </div>
    </div>`
    container.insertAdjacentHTML("beforeend", projectTemplate)

    }

    const renderPie = (id, percentage) => {
        const target = document.getElementById( `${id}pie`)
        target.style.setProperty("--p",  percentage)

    }

    const renderProjects = () =>{
        const container = document.querySelector(".act-proj-cont")
        container.innerHTML= "";
        for(let key in Model.projects) {
            renderProject(key)
          }
      
    }

    const renderMainbody=(name)=>{
        const mainbodyTemplate = `        <div class="main-body">
        <div class="current-section"> <h2 class="mainbody-title">${name}</h2> </div>
        <div class="task-container">
        </div>
     </div>`

        app.insertAdjacentHTML("beforeend", mainbodyTemplate)
    }

    const renderProjectForm = () => {
        const template = `            <div class="project-form">
        <input type="text" placeholder="Project name">
        <button class="add-project">Add</button>
    </div>`
    }



    const renderTasks = (array) => {
        const container = document.querySelector(".task-container")
        const title = document.querySelector(".mainbody-title")
        container.innerHTML = "";
        title.innerHTML= Model.currentSelection

        const checkCheckbox = (el) => {
            if (el.done === true) {
                return "checked"
            } else return " "
        }

        const generateTemplate = (el) => {
            let taskTemplate = `
            <div class="task" id="${el.id}">
            <div class="task-left">
            <div class="checkbox"><input type="checkbox" name="" id="${el.id}"  ${checkCheckbox(el)}></div>
            <div class="title-and-date">    
            <div class="task-title"> ${el.title}</div>
            <div class="due-date">${el.dueDate}</div>
            </div>
            <div class="description">${el.description}</div>
            </div>
            <div class="task-right">
            <div class="edit">
            <button><span class="material-symbols-outlined">
            edit
            </span></button>
            </div>
            <div class="delete">
            <button><span class="material-symbols-outlined">
             delete
             </span></button>
            </div>
            </div>
            </div> `

            return taskTemplate;
        }

        array.forEach(el => {
            let task = generateTemplate(el)
            container.insertAdjacentHTML("beforeend", task)
        });

    }

    const initialRender = (name) =>{
        renderNavbar();
        renderSidebar();
        renderMainbody(name);
    }

    const drawTask = (arg) => {
        const taskContainer = document.querySelector(".task-container")
        const taskTemplate = `
        <div class="task">
        <div class="task-left">
        <div class="checkbox"><input type="checkbox" name="" id=""></div>
        <div class="title-and-date">
        <div class="task-title">${arg.title}</div>
        <div class="due-date">${arg.dueDate}.</div>
        </div>
        <div class="description">${arg.description}</div>
        </div>
        <div class="task-right">
        <div class="edit">
            <button><span class="material-symbols-outlined">
                edit
                </span></button>
        </div>
        <div class="delete">
            <button><span class="material-symbols-outlined">
                delete
                </span></button>
        </div>
        </div>
        </div>`

        taskContainer.insertAdjacentHTML("beforeend", taskTemplate);
    }

    
    return{
        initialRender,
        drawTask,
        renderProjects,
        renderPie,
        renderTasks,
        toggleInputForm
    }
})();

export default DOM




function openInputForm () {
    document.querySelector(".input-form").style.visibility =" visible";
}

const templates = {
    inputForm: `    <div class="input-form">
    <form action="">
        <label for="ttitle">Title</label>
        <input type="text" id="ttitle" placeholder="Your task..">

        <label for="tdescription">Description <span class="optional">(optional)</span></label>
        <input type="text" id="tdescription" placeholder="Details (optional)">

        <label for="tdueDate">Due date <span class="optional">(optional)</span></label>
        <input type="date" name="dueDate" id="tdueDate">

        <label for="tpriority">Priority</label>
        <select name="priority" id="tpriority">
            <option value="important"> Important</option>
            <option value="standard" selected>Standard</option>
            <option value="optional"> Optional</option>
        </select>

        <button id="submit-form" type="button">Submit</button>
    </form>
</div>`,

}

const inputFormTemplate = `    <div class="input-form">
<form action="">
    <label for="ttitle">Title</label>
    <input type="text" id="ttitle" placeholder="Your task..">

    <label for="tdescription">Description <span class="optional">(optional)</span></label>
    <input type="text" id="tdescription" placeholder="Details (optional)">

    <label for="tdueDate">Due date <span class="optional">(optional)</span></label>
    <input type="date" name="dueDate" id="tdueDate">

    <label for="tpriority">Priority</label>
    <select name="priority" id="tpriority">
        <option value="important"> Important</option>
        <option value="standard" selected>Standard</option>
        <option value="optional"> Optional</option>
    </select>

    <button id="submit-form" type="button">Submit</button>
</form>
</div>`