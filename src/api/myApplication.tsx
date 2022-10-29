import React from "react"
import type{ApplicationListAPIResType,ApplicationListAPIReqType} from '../api/typs'
import {apiCall} from './'

type Props=ApplicationListAPIReqType
export const useMyApplicationListAPI =(props:Props)=>{

const [apiData,setApiData ] =React.useState<{errors:{error:any}|null,loading:boolean,data:null|ApplicationListAPIResType}>({errors:null,loading:true,data:null})

React.useEffect(()=>{
   
    
getApplicationList()
},[props.offset,props.pageNumber,props.filters.aplicationStatus,props.filters.carear,props.filters.applicant])

React.useEffect(()=>{

    
})


const getApplicationList =async()=>{
    let newError: any,newData:ApplicationListAPIResType|null=null
    let newLoading =true
    if(apiData.loading===false){
        setApiData(pre=>({...pre,loading:true}))
    }
    try{
        const response:ApplicationListAPIResType = await apiCall('/myapplications','GET',{params:props.filters})
        newLoading =false
     
        
        
        if(response!==undefined){

            newData =response
        }

    }
    catch(e){
      
        newError=e 
    }
   
         
    setApiData(pre=>({data:newData,loading:newLoading,errors:{error:newError||null}}))
    
}

    return [apiData.data,apiData.errors,apiData.loading]  as const
}