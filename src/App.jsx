import { useState } from 'react';
import './index.css';

function App() {
  const [todo, setTotodo] = useState([]);
  const [inputV, setInput] = useState('');

  function addTotodo() {
    if (inputV.trim() !== '') {
      setTotodo([...todo, inputV]);
      setInput('');
    }
  }

  function deelete(index) {
    const newItems = todo.filter((_, i) => i !== index);
    setTotodo(newItems);
  }

  function handleinput(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <div className="2xl:container bg-slate-400">
        <div className="w-[98%] grid grid-cols-1 h-screen">
          <div className="flex flex-col justify-center items-center">
            <input
              type="text"
              placeholder="Enter name"
              className="w-80 text-zinc-900 rounded-lg"
              value={inputV}
              onChange={handleinput}
            />
            <div>
              <button className="bg-blue-500 m-5 rounded-lg" onClick={addTotodo}>
                ADD
              </button>
            </div>
            <div className="flex flex-row justify-center items-center">
              <ul>
                {todo.map((item, index) => (
                  <li key={index}>
                    {index} 
                      {item}
                    <button
                      className="ml-2 bg-red-500 rounded-lg"
                      onClick={() => deelete(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
