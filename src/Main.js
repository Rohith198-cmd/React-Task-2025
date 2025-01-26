import React, { useContext } from 'react'
import dataContext from './dataContext'

const Main = () => {
  const {addProducts,productsname,setProductsname,id,setId,quality,setQuality,price,setPrice,mfdate,setmfdate,handledelete,data}=useContext(dataContext)
  return (
    <main>
      <form>
      <label htmlFor='id'>Products ID</label>
          <input type='number' id='id' value={id}
          onChange={(e)=>{
            setId(e.target.value)
          }}/>
          <label htmlFor='Productsname'>Products NAME</label>
          <input type='text' id='productsname' value={productsname}
          onChange={(e)=>{
            setProductsname(e.target.value)
          }}/>
          <label htmlFor='qality'>Quality</label>
          <input type='text' id='quality' value={quality}
          onChange={(e)=>{
            setQuality(e.target.value)
          }} />
          <label htmlFor='price'>PRICE</label>
          <input type='number' id='quality' value={price}
          onChange={(e)=>{
            setPrice(e.target.value)
          }} />
          <label htmlFor='date'>MF DATE</label>
          <input type='date' id='date' value={mfdate}
          onChange={(e)=>{
            setmfdate(e.target.value)
          }} />
      </form>
      <button onClick={addProducts}>add</button>
      <ul>
        {
          data.map(Products=><li key={Products.productsname}>{Products.quality}{Products.price}{Products.mfdate}
          <button onClick={()=>handledelete(Products.id)}>delete</button></li>)
        }
      </ul>
    </main>
  )
}

export default Main