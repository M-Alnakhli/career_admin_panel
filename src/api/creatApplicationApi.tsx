import React from "react"
import type{ApplicationCreateAPIResType,ApplicationConfigration} from '../api/typs'
import {apiCall} from './'

type Props={
  applicationInfo:ApplicationConfigration
  
    
}
export const useCreateApplicationAPI =()=>{

let [apiData,setApiData]= React.useState<{errors:{error:any}|null,loading:boolean,data:null|any}>({errors:null,loading:true,data:null})



const submitRusame =async(  applicationInfo:ApplicationConfigration)=>{
let newErros,newData =null

    try{
        const response:ApplicationCreateAPIResType = await apiCall('/createApplication','post',{data:applicationInfo})
        if(response?.applicationId!==undefined){
            newData =response
        }
    }
    catch(e){
        newErros=e
    }

    setApiData({loading:false,data:newData,errors:{error:newErros}})
}

    return [apiData.data,apiData.errors,apiData.loading,submitRusame]
}