import React,{Component} from 'react';
import { tsImportEqualsDeclaration } from '@babel/types';
import axios from 'axios';
import { withAlert } from 'react-alert'

const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

class CreateToDo extends Component{
  constructor(props){
      super(props);
      this.state = {
          todo_description:'',
          todo_responsible:'',
          todo_priority:'',
          todo_completed:false
      }
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

  onSubmit=(e)=>{
       const alert = this.props.alert;
      e.preventDefault();
      console.log(`description is:${this.state.todo_description}`);
      console.log(`responsible is :${this.state.todo_responsible}`);
      console.log(`priority is:${this.state.todo_priority}`);


      const newTodo={
        todo_description:this.state.todo_description,
        todo_responsible:this.state.todo_responsible,
        todo_priority:this.state.todo_priority,
        todo_completed:false 

        
      }
      axios.post('http://localhost:4040/todos',newTodo).then(res=>console.log(res))


      this.setState({
        todo_description:'',
        todo_responsible:'',
        todo_priority:'',
        todo_completed:false 

      })
      alert.show('Todo Created Successfully')

     

  }



render(){
return (
    <div style={{marginTop:'50px'}}>
        <h1>Create a new Todo</h1>

  <form onSubmit={this.onSubmit}>
  <div className="form-group">
    <label htmlFor="Description">Description</label>
    <input type="text" className="form-control" id="Description"  placeholder="Enter Description" value={this.state.todo_description} onChange={this.onChangeTodoDescription}/>
   
  </div>
  <div className="form-group">
    <label htmlFor="Responsible">Responsible</label>
    <input type="text" className="form-control" id="Responsible" placeholder="Enter Responsible" value={this.state.todo_responsible} onChange={this.onChangeTodoResponsible}/>
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
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>

)


}

}

export default withAlert()(CreateToDo);