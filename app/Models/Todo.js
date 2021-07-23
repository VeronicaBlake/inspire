export default class Todo {
    constructor({ completed, description, id = generateId()}){
        this.completed = completed, 
        this.description = description
        this.id = id
    }

    get Template(){
    return `<div><li>${this.description}</li></div>`
    }
}