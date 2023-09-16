import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import data from "./data/db.json"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function API() {
  return <p>PPPP</p>;
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
function DataHandle(){

  const dishes=data.dishes
  const [Data,setData] = useState(dishes)
  
  return(
    <>
    <Home/>
    <ul>{Data.map(item=><li key={item.id}><img src={item.image}></img><h2>{item.name}</h2></li>)}</ul>
    </>);
  }

function App() {
  return (
    
    
        
        <Routes>
                <Route exact path='/yummygreek' element={< DataHandle />}></Route>
                <Route exact path='/yummygreek/dishes' element={< API/>}></Route>
        </Routes>
        
      
    
  );
}

export default App;
