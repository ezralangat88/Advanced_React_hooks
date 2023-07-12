import { useRef, useState, useEffect } from "react"

const UseRef2 = () => {

    const renders = useRef(1)
    const prevRef = useRef()

    const [name, setName] = useState('')

    useEffect(() => {
      renders.current = renders.current + 1
      prevRef.current = name
    }, [name])
      
  return (
    <div>
        <h2>Example 2</h2>
        <h3>Renders: {renders.current}</h3>
        <h3>Previous State: {prevRef.current}</h3>
        <input 
        
            type="text" 
            value={name}
            ref={prevRef}
            onChange={(e)=>setName(e.target.value)}
        
        />
    </div>
  )
}

export default UseRef2