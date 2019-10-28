import React,{Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';






const Todo=(props)=>{



function onDelete(id){
 console.log("id is",id)
 axios.delete(`http://localhost:4040/todos/${id}`).then((res)=>{
  console.log(res)
 
 window.location.reload();
  
})

}


  return(
  <tr>
  <td>{props.index}</td>
    <td>{props.todo.todo_description}</td>
    <td>{props.todo.todo_responsible}</td>
    <td>{props.todo.todo_priority}</td>
    <td><Link  to={`/todos/edit/${props.todo._id}`}> <button type="button" className="btn btn-primary">Edit</button></Link></td>
   
    <td><button  onClick={()=>onDelete(props.todo._id)} type="button" className="btn btn-primary">Delete</button>
    </td>
    <td> <i className={props.todo.todo_completed ? 'fa fa-check-circle':'fa fa-times'}  style={{fontSize:'38px',color:'red'}}></i></td>
    
    </tr>
    )

}
export default Todo
