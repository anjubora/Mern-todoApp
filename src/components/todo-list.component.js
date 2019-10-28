import React,{Component} from 'react';
import axios from 'axios';
import Todo from './todo.component'
class TodoList extends Component{

state={
todos:[]

}    
componentDidMount(){
    console.log("in component did mount")
    axios.get('http://localhost:4040/todos').then((res)=>{
        console.log(res)
        this.setState({todos:res.data});
    })
}
getTodo=()=>{
 
    return this.state.todos.map(function(currentTodo, i){
    return <Todo todo={currentTodo} key={i}  index={i}/>;
})

}

render(){
    return (

        <div>
            <h1>To Do List</h1>
            <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Description</th>
                        <th scope="col">Responsible</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                        <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                     { this.getTodo()}
                    </tbody>
            </table>
        </div>
    )


}

}

export default TodoList;