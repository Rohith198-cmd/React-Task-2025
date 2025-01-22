import { useEffect,useRef,useState } from "react";
import './useRefinputfield.css';

const Userefinputfield=()=>{
    const[data,setData]=useState([])
    const inputRef=useRef()

    useEffect(()=>{
        inputRef.current.focus()
    },[])
    const[input,setInput]=useState('')

    const handleClick=()=>{
        const newData=[input]
        setData(newData)
        setInput('')
        inputRef.current.focus()
    }

    return(
        <div className="useRef">
            <div className="Datalist">
            {
                   data.map((item,i)=><li key={`${item}-${i}`}>{item}</li>) 
            }
            </div>   
            <div className="Inputfield">
            <input ref={inputRef} type="text" value={input}onChange={(e)=>{
                setInput(e.target.value)
            }}/>
            </div>
            <button onClick={handleClick}>CLICK</button>
        </div>
    )
}
export default Userefinputfield