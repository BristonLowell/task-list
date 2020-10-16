import { listService } from "../Services/ListService.js";
import { ProxyState } from "../AppState.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let temp = ProxyState.lists
  let template = ""
  temp.forEach(l => template += l.Template)
  document.getElementById("list").innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    //NOTE: Dont forget to register an event listener(s).
    ProxyState.on("lists", _drawLists);
    ProxyState.on("tasks", _drawLists);
    _drawLists();
  }

  //TODO: Your app will need the ability to create, and delete lists
  createList(e) {
    e.preventDefault()

    let form = e.target

    let rawList = {
      name: form.listName.value
    }
    console.log(rawList)


    listService.createList(rawList)

    form.reset()
  }

  deleteId(id) {
    if (window.confirm("Are you sure you want to delete this list?")) listService.deleteId(id)

  }
}

