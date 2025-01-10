import React from "react";

const Section=({Persons})=>{
    return(
        <div>
            <p>Name={Persons.name}</p>
            <p>Age={Persons.age}</p>
            <p>City={Persons.city}</p>
        </div>
    )
}

export default Section