import React, { useState } from 'react';
import './App.css';



function App() {


  const [posts, setPosts] = useState('');
  const buttonValue = async () => {
    const response = await fetch('https://beacon.nist.gov/beacon/2.0/chain/last/pulse/last')
    const data = await response.json()
    setPosts(data.pulse.outputValue)
    console.log(data.pulse.outputValue)
  }


  return (
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={buttonValue} className="App-button">Show me the last random value</button>
        <p>The last random value is :
          {posts ? <p className='App-text'>{posts}</p> : null}
        </p>
      </header>
    </div>
  );
}



export default App;


