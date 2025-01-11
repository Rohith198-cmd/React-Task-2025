import React from "react";
import './Section2.css'
const Section2=({details})=>{
    return(
        <div className="Section2">
            <table>
            <tbody>
                    <tr>
                        <td>{details.sno}</td>
                        <td>{details.name}</td>
                        <td>{details.gender}</td>
                        <td>{details.phoneNumber}</td>
                        <td>{details.email}</td>
                        <td>{details.course}</td>
                        <td>{details.city}</td>
                        <td>{details.pincode}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Section2