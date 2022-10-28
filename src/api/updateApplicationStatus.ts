import React from "react"
import type{ApplicationStatusType,ApplicationUpdateStatusAPIResType} from '../api/typs'
import {apiCall} from './'

type Props={}
export const useUpdateStatusApplicationAPI =(props:Props)=>{

let [apiData,setApiData] =React.useState<{errors:{error:any}|null,loading:boolean,data:null|any}>({errors:null,loading:true,data:null})




const updateApplicationStatus =async(applicationStatus:ApplicationStatusType,applicationId:string)=>{
let newData ,newError =null
    try{
        const response:ApplicationUpdateStatusAPIResType = await apiCall('/updateStatusApplication','put',{data:{applicationStatus,applicationId:applicationId}})
      
        if(response?.status!==undefined){
            newData =response
        }
    }
    catch(e){
        newError=e
    }
    setApiData({errors:{error:newError},loading:false,data:newData})
}

    return [apiData.data,apiData.errors,apiData.loading,updateApplicationStatus] as const 
}