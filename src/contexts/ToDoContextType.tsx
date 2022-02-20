import { ToDo } from '../models/ToDo';

export interface ToDoContextType {
    todos: ToDo[];
    addToDo(title: string): void;
    removeToDo(todo: ToDo): void;
    toggle(todo: ToDo): void;
}