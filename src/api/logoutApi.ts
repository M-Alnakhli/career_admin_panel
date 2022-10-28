import React from "react"
import type{LogoutAPIReqType,LogoutAPIResType} from '../api/typs'
import {apiCall} from './'

type Props={}
export const useEvaluateApplicationAPI =(props:Props)=>{

let [apiData,setApiData] =React.useState<{errors:{error:any}|null,loading:boolean,data:null|LogoutAPIResType}>({errors:null,loading:true,data:null})

React.useEffect(()=>{
deleteApplication()
},[])


const deleteApplication =async()=>{
    let newData ,newError= null
    try{
        const response:LogoutAPIResType = await apiCall('/logout','post',{})
        
        if(response?.status!==undefined){
            newData =response
        }
    }
    catch(e){
        newError=e
    }

    setApiData({errors:{error:newError},loading:false,data:newData as LogoutAPIResType})

}

    return apiData
}