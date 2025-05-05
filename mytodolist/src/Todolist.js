import { useState } from 'react'


function Todolist(){
const [input, setInput] = useState("");
const [tasks, setTasks] = useState([]);
const [count, setCount]=useState(0);

function addTask(){
  if (input !== " ") {
    setTasks([...tasks, input]);
    setCount(count + 1)
    setInput("")
  }
};

    return (
      <div >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter Tasks"
        />
        <button onClick={addTask}>Add</button>
        <h2>Things to do </h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <p> Number of things to do: {count}</p>
      </div>
    );
}
export default Todolist;