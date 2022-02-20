import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToDoContext from '../contexts/ToDoContext';
import AddToDo from './AddToDo';
import Navbar from './Navbar';
import ToDoList from './ToDoList';

const App = () => {
    return(
        <ToDoContext>
            <Router>
                <Navbar></Navbar>
                <br />
                <div className="uk-container">
                    <Switch>
                        <Route path="/create">
                            <AddToDo></AddToDo>
                        </Route>
                        <Route path="/">
                            <h3>Minha lista de tarefas</h3>
                            <ToDoList></ToDoList>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ToDoContext>
    );
}

export default App;