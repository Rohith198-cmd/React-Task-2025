import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import './Main.css'

const Main=({details})=>{
    return(
        <div className="Main">
            <Section1 details={details}/>
            <Section2 details={details[0]}/>
            <Section2 details={details[1]}/>
            <Section2 details={details[2]}/>
            <Section2 details={details[3]}/>
            <Section2 details={details[4]}/>
            <Section2 details={details[5]}/>
            <Section2 details={details[6]}/>
            <Section2 details={details[7]}/>

        </div>
    )
}
export default Main