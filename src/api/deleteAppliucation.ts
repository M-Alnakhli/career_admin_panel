import React from "react"
import type{ApplicationDeleteAPIResType} from '../api/typs'
import {apiCall} from './'

type Props={
  applicationId:string
  
    
}
export const useDeleteApplicationAPI =(props:Props)=>{

let [apiData,setApiData]=React.useState <{errors:{error:any}|null,loading:boolean,data:null|any}>({errors:null,loading:true,data:null})

React.useEffect(()=>{
deleteApplication()
},[])


const deleteApplication =async()=>{
    let newErros,newData =null
    try{
        const response:ApplicationDeleteAPIResType = await apiCall('localhost:3000/deleteApplication','post',{data:props.applicationId})
   
        if(response?.status!==undefined){
            newData =response
        }
    }
    catch(e){
newErros =e
    }

    setApiData({errors:null,loading:true,data:null})
}

    return apiData
}