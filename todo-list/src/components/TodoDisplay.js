import React from 'react';

const TodoDisplay = ( {taskList, setTaskList}) => {

  const checkboxHandler = (id) => {
    const updatedArr = taskList.map((task) => {
      if(task.id === id) {
        task.complete = !task.complete;
      }
      return task;
    })
    setTaskList(updatedArr);
  }

  const deleteTask = (id) => {
    const newArr = taskList.filter((task) => {
      return task.id !== id;
    })
    setTaskList(newArr);
  }
  

  return (
    <div className="col-8 mx-auto">
        <h1>To-Do:</h1>
        <div className="d-flex flex-column">
          {
            taskList.map((task)=>(
              <div className="d-flex justify-content-evenly align-items-baseline my-2">
                <input type="checkbox" className="me-2" onClick={ ()=>checkboxHandler(task.id) }  />
                    <label className={"col-4"} style={{ textDecoration: task.complete ? "line-through" : null }}>{task.title}</label>
                <button type="submit" className="btn btn-danger" onClick={()=>deleteTask(task.id)}>Delete</button>
              </div>
            ))
          }

        </div>
    </div>
  )
}

export default TodoDisplay

