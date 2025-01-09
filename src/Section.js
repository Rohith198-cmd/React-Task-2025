import React from'react'

const Section=({Persons})=>{
    return(
        
          <Section>
              <h1>Name  :{Persons.name}</h1>
              <h1>Age  :{Persons.age}</h1>
              <h1>City  :{Persons.city}</h1>
        </Section>
    )
}
export default Section