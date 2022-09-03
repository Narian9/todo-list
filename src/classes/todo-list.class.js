import { Todo } from "./todo.class";

export class TodoList {

    constructor () {
        // this.todos= [];
        this.cargarLocalStorage();

    }
/*Usar algo para crear un nuevo todo, 
requiero que se vaya guardando en el arreglo */
    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }
    /*Tambien necesitamos un metodo para eliminar los todos */
    eliminarTodo( id ) {
        /*El método filter() crea un nuevo array con todos los elementos 
        que cumplan la condición implementada por la función dada. */
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();
    }
    marcarCompletado( id ) {
        for ( const todo of this.todos ) {
            if ( todo.id ==  id ) {
                 todo.completado = !todo.completado;
                 break;
            }
        }

    }
    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado);
        this.guardarLocalStorage();
    }
    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify( this.todos ));

    }
    cargarLocalStorage() {

        this.todos = localStorage.getItem('todo') ? (JSON.parse( localStorage.getItem('todo'))) :
         [];

         this.todos = this.todos.map( Todo.fromJson );
        
    }


}