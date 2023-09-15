import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import data from "./data/db.json"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function API() {
  return (<>{JSON.stringify(data)}</>);
}

function Home(){
  return(<div className="App">
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    </header>
    </div>
    );
}
function Data(){
  const [Data,setData] = useState(null)
  //https://randomuser.me/api
  useEffect(()=>{
    
    fetch('https://pagoulid.github.io/yummygreek/dishes')
    .then(
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

  return(
    <>
    <Home/>
    <ul>{Data}</ul>
    </>);
  }

function App() {
  return (
    <>
    
        
        <Routes>
                <Route exact path='/' element={< Data />}></Route>
                <Route exact path='dishes' element={< API/>}></Route>
        </Routes>
        
      
    </>
  );
}

export default App;
