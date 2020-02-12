class Todos{
    constructor(description){
        this.description = description;
    }
}
class TodosManager{
    constructor(){
        this.todoArray = []
    }
    addTodo = (descripton) => {
        let todo = new Todos(description);
        this.todoArray.push(todo);
    }
    displayTodos = () =>{
        //DOM logic to display todos on page
    }
}
let manger = new TodosManager();
manger.addTodo(description)