// import logo from './logo.svg';
import NavBar from './components/NavBar';
import './App.css';
import { useState } from 'react';

function App() {
  const [value,setValue]=useState(0)
  return (
    <div className="App">
      <NavBar logoText="CodeWithTejas"/>
      <div className="value">{value}</div>
        <button onClick={()=>{
         setValue(value+1)
        }}>CLick ME!!!!</button>
     {/* props are components jismei data pass krskte  */}
    </div>
  
  );
}

export default App;
