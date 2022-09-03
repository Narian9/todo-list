//como la voy usar fuera de este archivo debo usar la palabra reservada export
export class Todo {

    static fromJson({ id,tarea, completado, creado }) {
        const tempTodo = new Todo( tarea );

        tempTodo.id         = id;
        tempTodo.completado = completado;
        tempTodo.creado     = creado;
        return tempTodo;
    }
    //vamo a necesitar crear tareas
    constructor( tarea ) {

        this.tarea = tarea;
//el gettime me da dar un numero que podre usar como identificador
        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();
        
    }
}