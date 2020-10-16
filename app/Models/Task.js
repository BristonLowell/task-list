import { generateId } from "../Utils/GenerateId.js";

export default class Task {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your task here is a freebie, it will set the id it is provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.taskName = data.taskName
    this.id = data.id || generateId();
    this.listId = data.listId
  }
  //Be sure to add the methods needed to create the view template for this model
  get Template() {
    return /*html*/ `
    <div class="col-11 border rounded shadow my-2">
      <h1 class="text-white">${this.taskName} <button class="text-white close mt-3 mr-2 float-right" onclick="app.taskController.deleteTask('${this.id}')"><span>&times;</span></button></h1>
    </div>
    `
  }

}
