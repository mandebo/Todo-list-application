const Task = (props) => {
    return (
    <div style={{ backgroundColor: props.completed ? "green" : "white" }}> 
        <h1><p >{props.taskName} </p>
        <button onClick={ ()=> props.deleteTask(props.id)}>Delete</button> 
        <button onClick={ () => props.completeTask(props.id)}>Complete</button>
        </h1>  

    </div>
    );


};

export default Task;