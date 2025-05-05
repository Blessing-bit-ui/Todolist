import { useState } from 'react'


function Todolist(){
const [input, setInput] = useState("");
const [tasks, setTasks] = useState([]);

const addTasks = () => {
  if (input !== "") {
    setTasks(...tasks, input);
    setInput("")
  }
};

    return(
        <div>
            <input
             value={input}
             onChange={(e)=>setInput(e.target.value)}
             placeholder="Enter Tasks"
            />
            <button onClick={addTasks}>Add</button>
            <ul>
                {tasks.map((task,index)=>(
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    )
}
export default Todolist;