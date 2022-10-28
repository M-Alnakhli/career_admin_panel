import React from "react"
import type{ApplicationUpdateAPIResType,ApplicationUpdateAPIReqType} from '../api/typs'
import {apiCall} from './'

type Props={application:ApplicationUpdateAPIReqType}
export const useUpdateApplicationAPI =(props:Props)=>{

let [apiData,setApiData]= React.useState<{errors:{error:any}|null,loading:boolean,data:null|any}>({errors:null,loading:true,data:null})

React.useEffect(()=>{
deleteApplication()
},[])


const deleteApplication =async()=>{
let newData,newError= null
    try{
        const response:ApplicationUpdateAPIResType = await apiCall('/updateApplication','put',{data:props.application})
    
        if(response?.status!==undefined){
            newData =response
        }
    }
    catch(e){
        newError= e
    }
    setApiData({errors:{error:newError},loading:true,data:newData})

}

    return apiData
}