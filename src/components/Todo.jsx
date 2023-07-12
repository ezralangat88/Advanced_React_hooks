import { useEffect, useState, useRef } from "react"


const Todo = () => {
    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState({})

    const isMounted = useRef(true)


    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res)=> res.json())
      .then((data) =>{
        if (isMounted.current) {
          
          setTimeout(() => {
            setTodo(data)
            setLoading(false)
          }, 3000)
        }
       
      })

      // return () =>{
      //   isMounted.current = false

      // }

    }, [])
    
  return loading ? <h2>Loading ...</h2> : <h3>{todo.title}</h3>

  
}

export default Todo