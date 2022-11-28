import {format} from "date-fns"

const setId = (title) =>{
  const truncateText = (text, length) => {
      if (text.length <= length) {
        return text;
      }
    
      return text.substr(0, length)
    }
  let sinWhitespace = title.replace(/\s+/g, '')
  let truncated = truncateText(sinWhitespace, 15)
  let noSpecialCharacters = truncated.replace(/[^a-zA-Z0-9 ]/g, '');
  return noSpecialCharacters + (Math.floor(Math.random() * 90000) + 10000)
} 


export default class Todo {
    constructor(title, description, dueDate, priority, done=false) {
        this.title = title;
        this.description = description
        this.dueDate = new Date(dueDate)
        this.priority = priority
        this.done = done

        this.id = setId(this.title);

    }
}
