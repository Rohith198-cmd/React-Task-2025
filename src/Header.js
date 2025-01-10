import React from "react";

const Header=({Persons})=>{
    return(
        <div>
            <h1>Welcome {Persons[0].name},{Persons[1].name},{Persons[2].name}</h1>
        </div>
    )
}

export default  Header