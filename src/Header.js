import React from'react'

const Header=({Persons})=>{
    return(
        <div>
            <h1>Welcome{Persons.name}</h1>
        </div>
    )
}
export default Header