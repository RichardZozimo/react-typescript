import React from 'react';
import { ToDo } from '../models/ToDo';
import ToDoListItem from './ToDoListItem';

const ToDoList = () => {
    const todos: ToDo[] = [
        { id: 1, title: 'Ir ao mercado', done: false },
        { id: 2, title: 'Ir ao trabalho', done: true }
    ];

    return(
        <table className="uk-table">
            <caption>Lista de Tarefas</caption>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos?.map(
                        todo => (<ToDoListItem key={todo.id} todo={todo}></ToDoListItem>)
                    )
                }
            </tbody>
        </table>
    )
}

export default ToDoList;