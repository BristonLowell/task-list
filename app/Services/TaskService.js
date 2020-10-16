import Task from "../Models/Task.js";
import { ProxyState } from "../AppState.js"
//Public
class TaskService {

  deleteTask(id) {
    let temp = ProxyState.tasks
    temp = temp.filter(t => t.id != id)
    console.log(ProxyState.tasks);
    ProxyState.tasks = temp
  }
  createTask(rawTask) {
    let tasks = ProxyState.tasks
    tasks.push(new Task(rawTask))
    ProxyState.tasks = tasks
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener
}

export const taskService = new TaskService();