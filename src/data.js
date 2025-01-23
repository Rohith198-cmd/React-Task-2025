import React, { useContext } from 'react'
import dataContext from './dataContext'

const Listdata = () => {
    const {data}=useContext(dataContext)
  return (
        <ul>
            {
                data.map((item,i)=><li key={`${item}-${i}`}></li>)
            }
        </ul>
  )
}

export default Listdata