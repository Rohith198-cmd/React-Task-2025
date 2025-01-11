import React from "react";
import './Section1.css'
const Section=({details})=>{
    return(
        <div className="Section1">
            <table>
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>name</th>
                        <th>gender</th>
                        <th>phoneNo</th>
                        <th>email</th>
                        <th>course</th>
                        <th>city</th>
                        <th>pincode</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}

export default Section