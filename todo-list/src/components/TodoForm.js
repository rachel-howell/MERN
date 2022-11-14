import React from 'react';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const TodoForm = ({taskList, setTaskList}) => {

  const [ task, setTask ] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = {
      id: nanoid(),
      title: task,
      complete: false
    }
    setTaskList([...taskList, newTask]);
    console.log("submit handler");
}

  return (
    <div className="bg-info">
        <form onSubmit={submitHandler}>
            <label className="m-2">Enter New Task: </label>
            <input type="text" className="me-2" onChange={(e)=>setTask(e.target.value)}/>
            <button type="submit" className="btn btn-success">Submit</button>
        </form>
    </div>
  )
}

export default TodoForm