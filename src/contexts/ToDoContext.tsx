import React, { createContext, useState } from 'react';
import { ToDo } from '../models/ToDo';
import { get } from '../services/ToDoService';
import { ToDoContextType } from './ToDoContextType';

export const ToDoContext = createContext<ToDoContextType>({
    todos: [],
    addToDo: () => {},
    removeToDo: () => {},
    toggle: () => {},
});

const ToDoProvider = (props: any) => {
    const [todos, setToDos] = useState<ToDo[]>(get);

    const addToDo = (title: string) => {
        const todo: ToDo = { id: todos.length + 1, title: title, done: false };
        setToDos([...todos, todo]);
    }

    const removeToDo = (todo: ToDo) => {
        const index = todos.indexOf(todo);
        setToDos(todos.filter((_, i) => i !== index));
    }

    const toggle = (todo: ToDo) => {
        const index = todos.indexOf(todo);
        todos[index].done = !todo.done;
        setToDos([...todos]);
    }

    return(
        <ToDoContext.Provider value={{ todos, addToDo, removeToDo, toggle }}>
            {props.children}
        </ToDoContext.Provider>
    )
}

export default ToDoProvider;