import {useState} from "react";
import Task from "./Task";


function Crud() {

    const [todoList, setTodoList] = useState( []);
    const [newTask, setNewTask] = useState("");
    
    const handleChange = (event) =>
    {
        setNewTask(event.target.value);

    };

    const addTask = () =>
    {
        //add value to state array
        //must use the specific set function

        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed: false,
        };
        
        setTodoList([...todoList, task]);


    };

    const completeTask = (id) => {

        setTodoList(
            todoList.map((task) => {
                if(task.id === id)
                {
                    return {...task, completed: true};
                }
                else
                {
                    return task;
                }
            })
        );
    };

    const deleteTask = (id) =>
    {
        //use filter function to delete stuff from an array   

        const newTodoList = todoList.filter((task) => {
           return task.id != id;
        })
        setTodoList(newTodoList);

    }

    return (
        <div className="App">
            <div className="addTask">

               <input onChange={handleChange}/>
                <button onClick={addTask}>Add Task</button>
               
            </div>

            <div className="list">
                {todoList.map((task) => {
                  return(
                    <Task 
                        taskName = {task.taskName}
                        id={task.id}
                        completed = {task.completed}
                        deleteTask = {deleteTask}
                        completeTask = {completeTask}
                    />
                  ); 
                })}
            </div>
          

        </div>

    );
}


export default Crud;