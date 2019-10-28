import React,{Component} from 'react';
import axios from 'axios';


class EditToDo extends Component{

constructor(props){
super(props);
this.state={
    todo_description:'',
    todo_responsiible:'',
    toto_priority:'',
    todo_completed:false
}
}
componentDidMount(){
axios.get('http://localhost:4040/todos/'+this.props.match.params.id).then(response=>{
    console.log(response)
 this.setState({
     todo_description:response.data.docs.todo_description,
     todo_responsible:response.data.docs.todo_responsible,
     todo_priority:response.data.docs.todo_priority,
     todo_completed:response.data.docs.todo_completed
 })


}).catch(function(err){
    console.log(err);
})


}


onChangeTodoDescription=(e)=>{
    this.setState({
        todo_description:e.target.value
    });
}
onChangeTodoResponsible=(e)=>{
  this.setState({
      todo_responsible:e.target.value
  });
}
onChangeTodoPriority=(e)=>{
  this.setState({
      todo_priority:e.target.value
  });
}
onChangeTodoCompleted=(e)=>{
    this.setState({
        todo_completed:!this.state.todo_completed
    })
}

onSubmit=(e)=>{
   
    e.preventDefault();
    
    console.log(`description is:${this.state.todo_description}`);
    console.log(`responsible is :${this.state.todo_responsible}`);
    console.log(`priority is:${this.state.todo_priority}`);
    console.log('completed is:',this.state.todo_completed)
    const updatedTodo={
        todo_description:this.state.todo_description,
        todo_responsible:this.state.todo_responsible,
        todo_priority:this.state.todo_priority,
        todo_completed:this.state.todo_completed
     }
    axios.patch('http://localhost:4040/todos/edit/'+this.props.match.params.id,{updatedTodo}).then(
        res=>{
           
            console.log(res);
           
            this.props.history.push('/');
        })
       
}

render(){
  return(
  <div style={{marginTop:'50px'}}>
        <h1>Edit Todo</h1>

  <form onSubmit={this.onSubmit}>
  <div className="form-group">
    <label htmlFor="Description">Description</label>
    <input type="text" className="form-control" id="Description"  value={this.state.todo_description} onChange={this.onChangeTodoDescription}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="Responsible">Responsible</label>
    <input type="text" className="form-control" id="Responsible"   value={this.state.todo_responsible} onChange={this.onChangeTodoResponsible}/>
  </div>
  <div className="form-group">
        <label htmlFor="priority">Priority</label><br/>
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline1" name="low" value="low" className="custom-control-input" checked={this.state.todo_priority==='low'} onChange={this.onChangeTodoPriority}/>
            <label className="custom-control-label" htmlFor="customRadioInline1">Low</label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline2" name="medium"  value="medium" className="custom-control-input" checked={this.state.todo_priority==='medium'} onChange={this.onChangeTodoPriority} />
            <label className="custom-control-label" htmlFor="customRadioInline2">Medium</label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
            <input type="radio" id="customRadioInline3" name="high"  value="high" className="custom-control-input" checked={this.state.todo_priority==='high'} onChange={this.onChangeTodoPriority} />
            <label className="custom-control-label" htmlFor="customRadioInline3">High</label>
        </div>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"  name="completed" value={this.state.todo_completed}  checked={this.state.todo_completed}  onChange={this.onChangeTodoCompleted}/>
    <label class="form-check-label" for="exampleCheck1">Completed</label>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    )

}
}
export default EditToDo;