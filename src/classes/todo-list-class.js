import { Todo } from "./todo.class";

export class TodoList{

    constructor(){
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorge();
    }

    eleminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id);        
        this.guardarLocalStorge();
    }

    marcarCompletado(id){
        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorge();  
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorge();
    }

    guardarLocalStorge(){
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }
    
    cargarLocalStorage(){

        this.todos = (localStorage.getItem('todo')) 
                        ? JSON.parse(localStorage.getItem('todo'))
                        : this.todos = [];


        // this.todos = this.todos.map(obj => Todo.fromJson(obj));
        this.todos = this.todos.map(Todo.fromJson);

        // if(localStorage.getItem('todo')){
        //     this.todos = JSON.parse(localStorage.getItem('todo'));

        // }else{
        //     this.todos = [];
        // }


    }

}