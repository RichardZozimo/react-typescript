import React, { useContext } from 'react';
import { ToDoContext } from '../contexts/ToDoContext';
import { ToDoContextType } from '../contexts/ToDoContextType';
import { ToDo } from '../models/ToDo';

interface ToDoListItemProps {
    todo: ToDo;
}

const ToDoListItem = ( props: ToDoListItemProps ) => {

    const { removeToDo, toggle } = useContext<ToDoContextType>(ToDoContext);

    const onRemove = (todo: ToDo) => {
        removeToDo(todo);
    }

    const handleChange = (event: any) => {
        toggle(props.todo);
    }

    return(
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox" type="checkbox" checked={props.todo.done} onChange={handleChange}/>
                </label>
            </td>
            <td className="uk-width-expand">{props.todo.title}</td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger" uk-icon="trash" onClick={() => onRemove(props.todo)}></button>
            </td>
        </tr>
    );
}

export default ToDoListItem