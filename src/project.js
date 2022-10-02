export default class Project {
    constructor(title, arr =[]) {
        this.title = title
        this.tasks = arr;
    }

    add(task) {
        this.tasks.push(task)
    }
}