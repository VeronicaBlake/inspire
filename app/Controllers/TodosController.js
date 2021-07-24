import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";


function _drawAll(){
    const todos = ProxyState.todos
    let template = ''
    todos.forEach(t => template += t.Template)
    document.getElementById('todo').innerHTML = template
}

export default class todosController{
    constructor(){
        ProxyState.on('todos', _drawAll)
        todosService.getAllTodos()
    }

    async getAllTodos(){
        try {
            await todosService.getAllTodos()
        } catch (error) {
            console.error(error)
        }
    }

    async createTodo(event){
        try {
            event.preventDefault()
            let form = event.target
            let rawTodo = {
                description: form.description.value
            }
            await todosService.createTodo(rawTodo)
            form.reset()
        } catch (error) {
            console.error('Create:', error)
        }
    }
    
    checked(id){
    todosService.checked(id)
    }

    removeTask(id){
        todosService.removeTask(id)
    }
}

