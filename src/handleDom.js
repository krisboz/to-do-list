
function initialLoad() {
    const app = document.querySelector(".app");

    const navbar = ``;
    const sidebar = ``;
    const mainBody = ``;
}

const DOM = (()=>{
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
    const pipi = () => console.log("I am alive!")
    
    return{
        pipi
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