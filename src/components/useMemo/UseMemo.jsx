import { useRef, useState, useEffect, useMemo } from "react"

const UseMemo = () => {

    const [number, setnumber] = useState(1)
    const [inc, setinc] = useState(0)

    const renders = useRef(1)

    const sqrt = useMemo(()=> getSqrt(number), 
    [number])

    function getSqrt(n) {
        for (let i = 0; i <= 1000; i++) {
            console.log(i)
        }

        console.log('Expensive function called!')
        return Math.sqrt(n)
    }

    useEffect(()=>{
        renders.current = renders.current + 1
    })

    const onClick = () =>{
        setinc((prevState)=>{
            console.log(prevState + 1)
            return prevState + 1
        })
    }

  return (
    <div>
        <h2>UseMemo</h2>
        <h3>Renders: {renders.current}</h3>
        <input 
            type="number" 
            className="form-control w-25"
            value={number}
            onChange={(e)=> setnumber(e.target.value)}
        
        />
        <h3>The sqrt of {number} is {sqrt} </h3>
        <button 
            onClick={onClick}
            className="btn btn-secondary"
        
        >
            Re Render
        </button>
    </div>
  )
}

export default UseMemo