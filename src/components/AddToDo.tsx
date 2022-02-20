import React, { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { ToDoContextType } from "../contexts/ToDoContextType"

// yup é uma lib de validação, observar documentações da biblioteca (https://github.com/jquense/yup)
const schema = yup.object().shape({
    title: yup.string().required('Tarefa inválida'),
});

interface AddToDoForm {
    title: string;
}

const AddToDo = () => {
    const { addToDo } = useContext<ToDoContextType>(ToDoContext);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: AddToDoForm, e: any) => {
        addToDo(data.title);
        e.target.reset();
        window.location.href = '/';
    }

    return(
        <form onSubmit={handleSubmit<AddToDoForm>(onSubmit)}>
            <h4>Nova tarefa</h4>
            <div className="uk-margin uk-width-1-1">
                <input type="text" name="title" id="title" placeholder="Nova tarefa..." className="uk-input" ref={register} />
                <span><small><strong className="uk-text-danger">{errors.title?.message}</strong></small></span>
            </div>
            <div className="uk-width-1-1">
                <button type="submit" className="uk-button uk-button-primary">Salvar</button>
            </div>
        </form>
    );
}

export default AddToDo;