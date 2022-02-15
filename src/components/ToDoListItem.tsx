import React from 'react';
import { ToDo } from '../models/ToDo';

interface ToDoListItemProps {
    todo: ToDo;
}

const ToDoListItem = ( props: ToDoListItemProps ) => {

    return(
        <tr className="uk-animation-slide-bottom-medium">
            <td className="uk-width-auto">
                <label>
                    <input className="uk-checkbox" type="checkbox"/>
                </label>
            </td>
            <td className="uk-width-expand">{props.todo.title}</td>
            <td className="uk-width-auto">
                <button className="uk-icon-button uk-button-danger" uk-icon="trash"></button>
            </td>
        </tr>
    );
}

export default ToDoListItem