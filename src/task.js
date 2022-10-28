export const Task = (props) => {
return (
    <div
    className="task"
    style={{ backgroundColor: props.completed ? "yellow" : "green" }}
    >
    <h1>{props.taskName}</h1>
    <button onClick={() => props.completeTask(props.id)}> Complete </button>
    <button onClick={() => props.deleteTask(props.id)}> Delete </button>
    </div>
);
};

<h1>Add the Year Make and Model of the car in Inventory unless it has been sold. In which case you can delete it.</h1>
