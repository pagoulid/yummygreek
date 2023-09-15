import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function Data(){
  const [Data,setData] = useState(null)

  useEffect(()=>{
    fetch('https://randomuser.me/api').then(
      response=>{
        console.log('test')
        console.log(response.status)
        if(response.status===200){
          return response.json()
        }
      }
    ).then(jsonData=>{
      console.log(jsonData.results)
      const Items = jsonData.results.map(item=><li key={item.id.value}>{item.location.city},{item.email}</li>)
      return Items
    }).then(Items=>{
      setData(Items)
    })
  },[]) // runs only on the first render

  return <ul>{Data}</ul>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Data/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gouligator Update 2!!!!!!!
        </a>
      </header>
    </div>
  );
}

export default App;
