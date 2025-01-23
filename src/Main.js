import React, { useContext } from 'react'
import Section from './Section'
import dataContext from './dataContext'

const Main = () => {
    const {input,input2,input3,setInput,setInput2,setInput3,handleClick}=useContext(dataContext)
  return (
    <main>
        <section>
            <input type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}  />
            <input type='text' value={input2} onChange={(e)=>{setInput2(e.target.value)}}  />
            <input type='text' value={input3} onChange={(e)=>{setInput3(e.target.value)}}  />
            <button onClick={handleClick}>add</button>
        </section>
        <Section />
    </main>
  )
}

export default Main