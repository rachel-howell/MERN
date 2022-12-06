import './App.css';
import { useState, useEffect} from 'react'
import userEvent from '@testing-library/user-event';

function App() {

  // const [ list, setList ] = useState([])

  // useEffect(()=>{
  //   fetch('https://api.thecatapi.com/v1/images/search')
  //   .then((res)=>{
  //     return res.json()
  //   }).then((result)=>{
  //     console.log(result)
  //     setList(result.data)
  //   }).catch((err)=>{
  //     console.log(err)
  //   })
  // },[])
  // // dependency array

  // return (
  //   <div className="App">
  //     <h1>hi</h1>
  //     {
  //       list.map((user) => (
  //           <div>
  //             <h1>{ user.first_name } { user.last_name}</h1>
  //             <img src={user.avatar} />
  //           </div>
  //       ))
  //   }
  //   </div>
  // );

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "https://api.thecatapi.com/v1/images/search");
xhr.setRequestHeader("live_iFJq1Xu3t2vP2r4YLxKy4IjrqRx0cjNR6pxd1KhC8Y731jCXyMYTB7487laJ3uHI", "DEMO-API-KEY");

xhr.send(data);
}

export default App;
