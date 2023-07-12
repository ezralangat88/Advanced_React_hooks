import { useRef } from "react"




const UseRef = () => {
    const inputRef = useRef()
    const paRef = useRef()



    const onSubmit = (e) =>{

        e.preventDefault()
        console.log(inputRef.current.value)
        inputRef.current.value = 'Hellooo'
        inputRef.current.style.backgroundColor = 'skyBlue'

        paRef.current.innerText = 'Goodbye!'

    }
  return (
    <div>
        <h2>Example 1</h2>
        <form action="" onSubmit={onSubmit}>
            <label htmlFor="" className='block text-sm font-medium text-gray-700'> Name </label>
            <input 
                type="text"  
                className=''
                ref={inputRef}
            />
            <button>Submit</button>
            <p onClick={()=>inputRef.current.focus()} ref={paRef}>None</p>
        </form>
    </div>
  )
}

export default UseRef