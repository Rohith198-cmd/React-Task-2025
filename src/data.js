import React, { useContext } from 'react'
import dataContext from './dataContext'

const Listdata = () => {
    const {data}=useContext(dataContext)
  return (
        <tbody>
            {     
                data.map((data,i)=><tr key={`${data.name}-${i}`}>
                    <td>{data.name}</td>
                    <td>{data.age}</td>
                    <td>{data.city}</td>
                </tr>
                )
            }
        </tbody>
  )
}

export default Listdata