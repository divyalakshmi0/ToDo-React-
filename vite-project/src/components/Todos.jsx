import React from "react";

function Todos({element,index,delTodo}) {
  return (
    <div className="todo-container">
      <p>{element}</p>
      <div className="actions">
        <input type="checkbox"/>
        <button onClick={()=> delTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default Todos;
