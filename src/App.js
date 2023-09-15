import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function Data(){
  const [Data,setData] = useState(null)
  //https://randomuser.me/api
  useEffect(()=>{
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST', 'OPTIONS');
    fetch('https://github.com/pagoulid/yummygreek/blob/master/src/data/db.json',{
      method:'get',
      headers: new Headers({
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Access-Control-Allow-Origin':'http://localhost:3000',
        'Access-Control-Allow-Credentials':'true'

      })
    }).then(
      response=>{
        console.log('test')
        console.log(response.status)
        if(response.status===200){
          return response.json()
        }
      }
    ).then(jsonData=>{
      const dishes = jsonData.dishes
      console.log(dishes)
      const Items = dishes.map(item=><li key={item.id}>{item.name}</li>)
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
