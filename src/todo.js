import React from 'react';

const Todos = ({mytodos, deleteTodo}) => {
    const todolist = mytodos.length ? (
        mytodos.map(todo => {
            return (
                <div className ="collection-item" key={todo.id}>
                <span 
                >  {todo.content}
                </span>
                <button onClick ={() =>{deleteTodo(todo.id )}}
                > delete 
                </button>
                
            
                </div>
            )
        })
    ) : (
        <p className = 'center'> you have no todos left </p>
    )
    return(
        <div className = 'todos collection'>
        {todolist}
        
        </div>
    )
}
export default Todos