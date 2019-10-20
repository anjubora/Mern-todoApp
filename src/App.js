import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Logo from './logo.jpg'
import TodoList from './components/todo-list.component';
import CreateToDo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';


function App() {
  return (
    <Router>
   <div className="container">
  
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <a className="navbar-brand" href="#"><img src={Logo} width="70px" height="60px" alt="TO DO List"/></a>
   <ul className="navbar-nav">
    <li className="nav-item">
      <a className="navbar-brand" href="#">Mern-Stack Todo App</a>
    </li>
    <li className="nav-item">
    <Link to="/" className="nav-link">Todos</Link>
    </li>
    <li className="nav-item">
      <Link to="/create" className="nav-link" >CreateTodo</Link>
    </li>
   
  </ul>
</nav>
<Route path="/" exact component={TodoList}/>
<Route path="/edit/:id" component={EditTodo}/>
<Route path="/create" component={CreateToDo}/>
</div>

     </Router>
  );
}

export default App;
