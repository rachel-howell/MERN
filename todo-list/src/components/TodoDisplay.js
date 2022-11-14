import React from 'react';

const TodoDisplay = ( {taskList, setTaskList}) => {

  const taskStatusHandler = (status) => {
    console.log("hi");
    if (status==true) {
      return "completed";
    } else {
      return "notCompleted";
    }
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
                <input type="checkbox" className="me-2" onClick={()=> 
                  {
                    task.complete = !task.complete;
                    console.log(task.complete);
                  }
                  }  />
                    <label className="col-4">{task.title}</label>
                <button type="submit" className="btn btn-danger" onClick={()=>deleteTask(task.id)}>Delete</button>
              </div>
            ))
          }

        </div>
    </div>
  )
}

export default TodoDisplay

