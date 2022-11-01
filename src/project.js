export default class Project {
    constructor(arr =[]) {
        this.tasks = arr;
    }

    add(task) {
        this.tasks.push(task)
    }
}