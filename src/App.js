import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [tips, setTips] = useState("");

useEffect(() => {
fetchTips();
}, [])

const fetchTips = async () => {
const response = await fetch(`http://www.boredapi.com/api/activity/`);
const data = await response.json();
console.log(data.activity);
setTips(data.activity)
}
  return (
    <div className='App'>
      <h1>Feel bored?</h1>
      <p className='instruction'>We can give you a tip what to do. Press the button and choose!👇🏼</p>
      <p className='tip'> {tips} </p>
      <button onClick={fetchTips}>👉🏼 Get Tip</button>
    </div>
  );
}

export default App;
