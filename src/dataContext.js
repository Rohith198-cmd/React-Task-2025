import axios from "axios";
import { createContext,useEffect, useState } from "react";

const dataContext=createContext({})


export function DataContextProvider({children}){

    const [data,setData]=useState([])
    const[id,setId]=useState('')
    const[productsname,setProductsname]=useState('')
    const[quality,setQuality]=useState('')
    const[price,setPrice]=useState('')
    const[mfdate,setmfdate]=useState('')
    useEffect(()=>{
        getallProducts()
    },[])
    const getallProducts=async ()=>{
        try{
            const response=await axios.get('/Products/get')
            setData(response.data)
        }catch(e){
            console.log(e.message);
            
        }
    }
    const addProducts=async ()=>{
        try{
            const response=axios.post('/Products/post',{id,productsname,quality,price,mfdate})
            console.log(response.data);
            setData([...data,{id,productsname,quality,price,mfdate}])
            setId('')
            setProductsname('')
        }catch(e){
            console.log(e.message);
        }
    }
    const handleDelete= async (id)=>{
        try{
            const response=await axios.delete(`/Products/${id}`)
            console.log(response.data);
            const newData=data.filter(products=>products.id!==id)
            setData(newData)
        }catch(e){
            console.log(e.message);
            
        }
    }
    return(
        <dataContext.Provider value={{getallProducts,addProducts,productsname,setProductsname,id,setId,quality,setQuality,price,setPrice,mfdate,setmfdate,data,handleDelete}}>
        {children}
        </dataContext.Provider>

    )
}


export default dataContext