import { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";
function App() {
  const [inputVal, setInputVal] = useState("");
  const [inputArray, setInputArray] = useState([]);

  function addTodo() {
    if (inputVal != "") {
      setInputArray((e) => [...e, inputVal]);
      setInputVal("");
    }
  }

  function writeTodo(e) {
    setInputVal(e.target.value);
  }

  function delTodo(todoindex) {
    setInputArray((prevTodos)=> prevTodos.filter((prevTodos,index)=> { return index != todoindex}))
  }

  return (
    <main>
      <h1>ToDo List</h1>
      <InputContainer
        inputVal={inputVal}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoContainer inputArray={inputArray} delTodo={delTodo} />
    </main>
  );
}

export default App;
