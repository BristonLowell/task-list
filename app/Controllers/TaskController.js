import { taskService } from "../Services/TaskService.js";
import { listService } from "../Services/ListService.js"
import { ProxyState } from "../AppState.js"

//TODO Don't forget to render to the screen after every data change.

//Public
export default class TaskController {
  constructor() {
    //NOTE: Dont forget to register an event listener(s).


    //TODO: Your app will need the ability to create, and delete lists
  }
  createTask(e, listId) {
    e.preventDefault()

    let form = e.target

    let rawTask = {
      taskName: form.taskName.value,
      // pizzaId
      listId: listId
    }

    taskService.createTask(rawTask)

    form.reset()
  }

  deleteTask(id) {
    if (window.confirm("Are you sure you want to delete this task?")) taskService.deleteTask(id)

  }
}
