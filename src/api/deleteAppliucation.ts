import React from "react"
import type{ApplicationDeleteAPIResType} from '../api/typs'
import {apiCall} from './'

type Props={
  applicationId:string
  
    
}
export const useDeleteApplicationAPI =()=>{

let [apiData,setApiData]=React.useState <{errors:{error:any}|null,loading:boolean,data:null|ApplicationDeleteAPIResType}>({errors:null,loading:true,data:null})



const deleteApplication =async(applicationId:string)=>{
    let newErros,newData =null
    try{
        const response:ApplicationDeleteAPIResType = await apiCall('/deleteApplication','post',{data:{applicationId:applicationId}})
   
        if(response?.status!==undefined){
            newData =response
        }
    }
    catch(e){
newErros =e
    }

    setApiData({errors:null,loading:true,data:null})
}

    return [apiData.data,apiData.errors,apiData.loading,deleteApplication] as const 
}