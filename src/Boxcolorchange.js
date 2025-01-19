import React from "react";
import { useState } from "react";
import './Boxcolorchange.css';

const Boxchange=()=>{
    const[change,setchange]=useState("")
    return(
        <div className="box">
            <div className="box1" style={{backgroundColor:change}}></div>
            <input type="text" value={change} onChange={(e)=>setchange(e.target.value)}></input>
        </div>

    )
}
export default Boxchange