import TaskItem from '../task-item/task-item.component';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './task-list-component.css'

function TaskList() {
    const [tasks,setTasks] = useState([]);
    useEffect(() => {
        axios.get("https://api.github.com/repos/yugabyte/yugabyte-db/issues?state=closed&per_page=100&page=1").then((response) => {
            console.log(response.data);
            setTasks(response.data);
        })
    }, [])
    return (
        <div className="task-list">
            <h1> All Tickets</h1>
            {tasks.map((task)=>{
                return (<TaskItem key={task.id} task={task}></TaskItem>)
            })}
        </div>
    );
}
export default TaskList;