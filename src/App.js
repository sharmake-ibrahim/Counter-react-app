 import React, {useState} from 'react';
import '../src/App.css';
// import './App.scss';


function App() {
  const valueState = 0;
  const [count, setCount] = useState(valueState)

  

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2 className='display'>{count}</h2>
      <section className='allBtn'>
        <button onClick={ ()=> setCount(count - 1)}   className='decrement'>Decrement</button>
        <button onClick={ ()=> setCount(valueState)}   className='reset'>Reset</button>
        <button onClick={ ()=> setCount(count + 1 )} className='increment'>Increment</button>
      </section>
    </div>

  );

  }

export default App;
