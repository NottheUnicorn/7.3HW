import "./App.css";
import { useState } from "react";
import { Task } from "./task";


<h1>Add the Year Make and Model of the car in Inventory unless it has been sold. In which case you can delete it.</h1>

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
<div>
<h1>Add the Year Make and Model of the car in Inventory unless it has been sold. In which case you can delete it.</h1>
</div>
  return (
    
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}> Add Car</button>
        <p>Add Car Year, Make and Model</p><br></br>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
        <p>Click to confirm in Inventory, Will turn yellow</p><br></br>
        <p>Hit delete to show car is not in Inventory</p>
      </div>
    </div>
  );
}


export default App