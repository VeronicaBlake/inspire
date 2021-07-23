export default class Todo {
    constructor({ completed, description, id = generateId()}){
        this.completed = completed || false, 
        this.description = description
        this.id = id
    }

    get Template(){
    return `<ul class = "list-group">
      <li class = "list-group-item"><input id = "box" type="checkbox"
            onclick="app.todosController.checked('${this.id}')" ${this.completed ? 'checked' : ''}> 
      ${this.description} <i class="fas fa-times ml-2 text-danger" onclick="app.todosController.removeTask('${this.id}')"></i>
      </li>
      </ul>`
    }
}