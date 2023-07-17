import { Button } from "bootstrap"
import React, { useState, useCallback } from "react"

const UseCallback = () => {
    const[tasks, setTasks] = useState([])

    const addTask = useCallback(() =>{
        setTasks((prevState) =>[...prevState, 'some added task'])
    }, [setTasks])

  return (
    <div>
        <CustomButton addTask={addTask}/>
        {
            tasks.map((task, index)=>(
                <p key={index}>{task}</p>
            ))
        }

    </div>
  )
}

//React.memo - HOC that takes react componenet as a prop and prevents rerendering if props / values havenot changed

const CustomButton = React.memo(({addTask}) =>{
    console.log('Button rendered')

    return (
        <div>
            <button className="btn btn-primary" onClick={addTask}>
                Add Task
            </button>
        </div>
    )
})

export default UseCallback