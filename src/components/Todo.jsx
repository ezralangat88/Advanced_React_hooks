import { useEffect, useState, useRef } from "react"


const Todo = () => {
    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState([])

    const isMounted = useRef(true)

    const limit = 10

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/todos?_limit=10`)
      .then((res)=> res.json())
      .then((data) =>{
        // if (isMounted.current) {
          
          setTimeout(() => {
            setTodo(data)
            setLoading(false)
          }, 2000)
        // }
       
      })

      return () =>{
        isMounted.current = false

      }

    }, [])
    
  return loading ? <h2>Loading ...</h2> : 

<table
  className="table_content"
  id="table-to-xls">
  <thead>
    <tr>
      <th>Id</th>
      <th>Title</th>
    
    </tr>
  </thead>
  <tbody className="tbody">
    {todo
   
      .map((item) => (
        <tr>
          <td>{item.id}</td>
          <td>{item.title}</td>
          
        </tr>
      ))}
  </tbody>
</table>
  

  
}

export default Todo