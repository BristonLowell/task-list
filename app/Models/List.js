import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js";
export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.name = data.name
    this.id = data.id || generateId();
  }

  get Template() {
    return /*html*/ `
    <div class="col-md-3 col-sm-12 border border-white rounded shadow-lg m-5">
        <h1 class="text-white">${this.name} <button class="text-white close mt-3" onclick="app.listController.deleteId('${this.id}')"><span>&times;</span></button></h1>
        <form onsubmit="app.taskController.createTask(event, '${this.id}')">
          <div class="form-group">
            <input type="text" name="taskName" class="form-control" placeholder="Enter Task Here">
            <button type="submit" name="" id="" class="btn btn-primary btn-lg btn-block">Add</button>
          </div>
        </form>
        <div class="row justify-content-center">
                ${this.Tasks}
        </div>
    </div>
    `
  }

  get Tasks() {
    let template = ""
    let tasks = ProxyState.tasks.filter(t => t.listId == this.id)
    tasks.forEach(t => template += t.Template)
    return template
    //Be sure to add the methods needed to create the view template for this model
    //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  }
}
