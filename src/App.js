import { useState } from 'react'
import "./App.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo])
    setToDo("");
  }
  const deletebtn = (idx) => setToDos((curToDos) => curToDos.filter((value ,curIndex) => curIndex !== idx));
  return (
    <div>
      <h1 className='lostark'>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
      <input
      onChange={onChange}
      value={toDo}
      type="text"
      placeholder='Write your to do...'
      />
      <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => <li key={idx}> {item}
        <button onClick={() => deletebtn(idx)}>X</button>
        </li>)}
      </ul>
    </div>
  )
}

export default App;
 