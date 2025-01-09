import React from'react'
import Section from'./Section'


const Main=({Persons})=>{
    return(
        <Main>
            <h1>Your Details</h1>
            <Section Persons={Persons} />
        </Main>
    )
}
export default Main