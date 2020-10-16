import List from "../Models/List.js";
import { ProxyState } from "../AppState.js"
//Public
class ListService {
  deleteId(id) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != id)
    console.log(ProxyState.tasks);
    console.log(ProxyState.lists);
  }
  createList(rawList) {
    let list = ProxyState.lists
    list = [...list, new List(rawList)]
    ProxyState.lists = list
    console.log(ProxyState.lists)
  }


  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener
}

export const listService = new ListService();
