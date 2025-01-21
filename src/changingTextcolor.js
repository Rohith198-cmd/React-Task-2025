import React from "react";
import { useState } from "react";
import './ChangingTextcolor.css';

const Colorchange=()=>{
    const [color,setcolor]=useState()
    return(
        <div className="textcolorchange">
            <h2 style={{color:color}}>This Color name is:{color}</h2>
            <button className="btn1" onClick={()=>setcolor('red')}>red</button>
            <button className="btn2" onClick={()=>setcolor('blue')}>blue</button>
            <button className="btn3" onClick={()=>setcolor('green')}>green</button>
            <button className="btn4" onClick={()=>setcolor('yellow')}>yellow</button>
            <button className="btn5" onClick={()=>setcolor('pink')}>pink</button>
        </div>
    )
}
export default Colorchange
