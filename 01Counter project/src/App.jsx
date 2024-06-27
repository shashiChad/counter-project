import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let[counter,setcounter] = useState(15)

  //let Counter = 15
  const addvalue = () => {
//Counter = Counter + 1
if(counter < 20){
  setcounter(counter + 1)
}else{
  setcounter(20)
}
  }
  const removevalue = () => {
    if(counter > 0){
      setcounter(counter - 1)
    }else{
      setcounter(0)
    }
    
  } 

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter project ={counter}</h2>
      <button onClick={addvalue}>Add value</button>
      <br/>
      <button onClick={removevalue}>Remove value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
