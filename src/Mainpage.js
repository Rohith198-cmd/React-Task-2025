import React from "react";
import Profile from './assesst/rohth.jpg'

const Mainpage=()=>{
    const bio={
        age:12,
        city:'chennai',
        gender:'male'
      }
    return(
        <div className="Mainpage">
            <div className="Mainpage-content">
                <img src={Profile} alt="Profile"  width={165}/>
            <p>My name is jhon</p>
            {/* <p>{bio.city}</p>
            <p>{bio.age}</p>
            <p>{bio.gender}</p> */}
            <p>{`Age: ${bio.age}`}</p>
            <p>{`City: ${bio.city}`}</p>
            <p>{`Gender: ${bio.gender}`}</p>
            </div>
        </div>
    )
}
export default Mainpage