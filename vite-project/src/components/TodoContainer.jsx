import React from 'react'
import Todos from './Todos'
function TodoContainer({inputArray,delTodo}) {
  return (
    <div className='container'>
        {inputArray.map((e,index)=>{
            return (
            <Todos element={e} index={index} delTodo={delTodo} />
        )
        })}
      </div>
  )
}

export default TodoContainer