import './App.css';
import BoxForm from './components/BoxForm.js';
import BoxDisplay from './components/BoxDisplay';
import { useState } from 'react';

function App() {

  const [boxList, setBoxList] = useState([]
);

  return (
    <div className="App">
        <BoxForm boxList={boxList} setBoxList={setBoxList}/>
        <BoxDisplay boxList={boxList}/>
    </div>
  );
}

export default App;
