import ListController from "../app/Controllers/ListController.js"
import TaskController from "../app/Controllers/TaskController.js"


class App {
  // TODO load your controllers here
  listController = new ListController()

  taskController = new TaskController()
}

window["app"] = new App();
