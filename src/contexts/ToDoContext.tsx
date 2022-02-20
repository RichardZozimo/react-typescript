import React, { createContext } from 'react';
import { ToDo } from '../models/ToDo';
import { ToDoContextType } from './ToDoContextType';

export const ToDoContext = createContext<ToDoContextType>({
    todos: [],
    addToDo: () => {},
    removeToDo: () => {},
    toggle: () => {},
});

const ToDoProvider = (props: any) => {
    const todos: ToDo[] = [
        { id: 1, title: 'Ir ao mercado', done: false },
        { id: 2, title: 'Ir ao trabalho', done: true }
    ]
    const addToDo = (title: string) => {
        console.log('Adicionou ' + title);
    }
    const removeToDo = (todo: ToDo) => {
        console.log('Removeu ' + todo.title);
    }
    const toggle = (todo: ToDo) => {
        console.log('Alterou ' + todo.title);
    }

    return(
        <ToDoContext.Provider value={{ todos, addToDo, removeToDo, toggle }}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export default ToDoProvider;