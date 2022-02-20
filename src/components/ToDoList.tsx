import React, { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';
import { ToDoContextType } from '../contexts/ToDoContextType';
import ToDoListItem from './ToDoListItem';

const ToDoList = () => {
    const { todos } = useContext<ToDoContextType>(ToDoContext);

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