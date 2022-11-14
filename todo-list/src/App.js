 import './App.css';
 import TodoDisplay from './components/TodoDisplay';
 import TodoForm from './components/TodoForm';
 import { useState } from 'react';

function App() {

  const [ taskList, setTaskList ] = useState([{
    id: 1,
    title: "Finish assignment",
    complete: false
  }]);
  return (
    <div className="App container text-center">
      <div className="row">
        <h1 className="mt-3">To-Do List</h1>
        <div className="col border mt-3 p-3 bg-danger">
          <TodoForm taskList={taskList} setTaskList={setTaskList}/>
        </div>
        <div className="col border mt-3 bg-info">
          <TodoDisplay taskList={taskList} setTaskList={setTaskList}/>
        </div>
      </div>
    </div>
  );
}

export default App;
