import React from 'react'

function InputContainer({inputVal, writeTodo,addTodo,inputArray}) {
  return (
    <div className='inputcontainer'>
        <input type="text" value={inputVal} onChange={writeTodo}/>
        <button onClick={addTodo}>Add</button>
      </div>
  )
}

export default InputContainer