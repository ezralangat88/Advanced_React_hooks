import { useState } from "react"
import Todo from "./Todo"

const UseRef3 = () => {
  const [showToDo, setshowToDo] = useState(true)
  return (
    <div>
        <h2>Example 3</h2>
        {
          showToDo && (
           <Todo/>
          )
        }

    <button 
      className="btn btn-primary"
      onClick={() =>{
        setshowToDo(!showToDo)
      }}
    >
       Toggle Todo
    </button>
    </div>
  )
}

export default UseRef3