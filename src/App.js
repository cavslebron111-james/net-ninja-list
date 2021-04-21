import React,{Component} from 'react';
import Todos from './todo';
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: "buy some milk"      },
      {id: 2, content: "get some ice cream"   },
      {id: 3, content: "get fish ball"   }
    
    ]
    }
    deleteTodo = (id) => {
      const deleTodo = this.state.todos.filter(todo => {
        return todo.id !== id
      });
      this.setState({
        todos: deleTodo
      }) 
  
    }
   
    AddTodo = (mytodo) => {
       mytodo.id = Math.random();
        let todos = [...this.state.todos,mytodo];
        this.setState({
        todos
        })
    }
  
    
    render(){
  
  
  
    return (
    <div className="todo-app container">
     <h1 className = 'center blue-text'> Todo's</h1> 
     
     <AddTodo AddTodo ={this.AddTodo} />
     <Todos mytodos = {this.state.todos} deleteTodo = {this.deleteTodo} />
    
     </div>
  );
}
}
export default App
