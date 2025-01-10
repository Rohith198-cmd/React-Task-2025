import React from "react";
import Section from "./Section";


const Main=({Persons})=>{
    return(
        <div>
            <h2>This is yor Details</h2>
            <Section Persons={Persons[0]} />
            <Section Persons={Persons[1]} />
            <Section Persons={Persons[2]} />
        </div>
    )
}

export default Main