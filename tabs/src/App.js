import './App.css';
import Tab from './components/Tab';
import { useState } from 'react';

function App() {

  const [ tabArr, setTabArr] = useState([
    {
    label: "Tab 1",
    content: "Welcome to my react app: tabs. Please enjoy."
    }, 
    { 
      label: "Tab 2",
      content: "If you're reading this you've clicked on the second tab. Nice."
    }, {
      label: "Tab 3",
      content: "Now you're on the third tab and final tab. Thanks. See you next time."
    }])

  return (
    <div className="App">
      <Tab tabArr={ tabArr }/>
    </div>
  );
}

export default App;
