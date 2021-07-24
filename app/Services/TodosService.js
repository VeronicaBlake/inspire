import { ProxyState } from "../AppState.js"
import  Todo   from "../Models/Todo.js"
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

    async checked(id){
        let found = ProxyState.todos.find(i => i.id === id)
        found.completed = !found.completed
        await sandbox.put(`veronica/todos/${id}`, found)
        this.getAllTodos()
    }

    async removeTask(id){
        // if(window.confirm('Delete this task?'))
        let toDelete = ProxyState.todos.filter(t => t.id !=id)
        await sandbox.delete(`veronica/todos/${id}`, toDelete)
        this.getAllTodos()
    }
}

export const todosService = new TodosService()





  