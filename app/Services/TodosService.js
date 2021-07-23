import { ProxyState } from "../AppState.js"
import  Todo  from "../Models/Todo.js"
import { sandbox } from './AxiosService.js'

class TodosService{
    constructor(){
        this.getAllTodos()
    }

    async createTodo(rawTodo){
        const res = await sandbox.post('veronica/todos', rawTodo)
        ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    }

    async getAllTodos(){
        let res = await sandbox.get('veronica/todos')
        ProxyState.todos = res.data.map(t => new Todo(t))
    }

    checked(bool, id){
        ProxyState.todos.find(i => i.id === id).checked = bool
        // saveState()
        ProxyState.todos = ProxyState.todos
    }
}

export const todosService = new TodosService()





  