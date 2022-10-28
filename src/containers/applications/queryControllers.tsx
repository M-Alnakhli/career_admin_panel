import React from 'react'
import { ApplicationListAPIReqType, ApplicationStatusType } from '../../api/typs'
import  {Selction }  from'../../componenets/selction'

type Props = {
    query:ApplicationListAPIReqType,
    onChangePage:(offset:number,pageNumber:number,recordsPerPage:number)=>void,
    onChangeFilter:(aplicationStatus:string|null)=>void

}
export const QueryControllers = (props:Props) => {
    const [status,setStatus] =React.useState<ApplicationStatusType>(null)
    const options = [
        {label:'All',value:'All'}, {label:'Created',value:'Created'}, {label:'Completed',value:'Completed'}, {label:'Accepted',value:'Accepted'},{label:'Rejected',value:'Rejected'},
        
      ] 
      const changeApllicationStatus =(val:ApplicationStatusType&'All')=>{
        console.log("here is the change",val);
        const apiVlaue =val==='All'?null:val 
        props.onChangeFilter(apiVlaue)
    
      }
  return (
    <div style={{display:'flex',marginBottom:'20px'}}>  <Selction setValue={changeApllicationStatus as (val:string)=>void} value={props.query.filters.aplicationStatus as string} selctionId='applicationStatus' options={options} label={'Status'} /></div>
  )
}


