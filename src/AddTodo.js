import React, {Component} from 'react';


class AddTodo extends Component {
  
    state = {
        content: ''
    }

   handleChange = (e) => {
  this.setState({
      content: e.target.value
  })
 }
  
  handleSubmit = (e) => {
   e.preventDefault();
    this.props.AddTodo(this.state)
    this.setState({
      content: ""
    })
      
  }
  
    render() {
        return(
            <div className ="submission">
          <form onSubmit ={this.handleSubmit}>
            <label>input first</label>
            <input type = 'text' onChange={this.handleChange} value ={this.state.content}   />
           
            </form>
            </div>
        )
    }
}

export default AddTodo;