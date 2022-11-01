import { TaskElement } from "./TaskElement.js"

console.log(TaskElement)

const task = {
        "id": 1,
        "title": "Paint the wall",
        "description": "Please paint all the walls in white color", 
        "checked": false
}

const taskListContainer = document.querySelector('.task-list-container')

const NewTask = new TaskElement(task)

taskListContainer.appendChild(NewTask)

