﻿import { ToDo } from '../models/ToDo';

const TODO_STORE = 'todos'; // utilização de constantes para evitar erros de digitação ao longo do codigo

export const get = (): ToDo[] => {
    const data = localStorage.getItem(TODO_STORE) || '';
    try {
        const result = JSON.parse(data) as ToDo[];
        return result;
    } catch {
        return [];
    }
}

export const save = (data: ToDo[]) => {
    if (data?.length >= 1) {
        localStorage.setItem(TODO_STORE, JSON.stringify(data));
    }
}