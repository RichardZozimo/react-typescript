import React from 'react';
import ToDoContext from '../contexts/ToDoContext';
import Navbar from './Navbar';
import ToDoList from './ToDoList';

const App = () => {
    return(
        <ToDoContext>
            <Navbar></Navbar>
            <ToDoList></ToDoList>
        </ToDoContext>
    );
}

export default App;