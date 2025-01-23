import { createContext, useState } from "react";

const dataContext=createContext({})


export function DataContextProvider({children}){

    const [data,setData]=useState([])
    const [input,setInput]=useState('')
    const[input2,setInput2]=useState('')
    const[input3,setInput3]=useState('')

    const handleClick=()=>{
        if(!input){
            alert('Input Cannot be Empty')
            return
        }
        const newData=[...data,input,input2,input3]
        setData(newData)
        setInput('')
        setInput2('')
        setInput3('')
    }

    return(
        <dataContext.Provider value={{data,input,input2,input3,setInput,setInput2,setInput3,handleClick}}>
            {children}
        </dataContext.Provider>
    )
}


export default dataContext