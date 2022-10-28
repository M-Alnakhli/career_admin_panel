import { ApplicationStatusType } from "../../api/typs"
import {Label} from '../Text/label'
import {ReactComponent as Edit} from '../../assets/icons/Edit.svg'
import React, { ReactNode } from "react"
type Props = {
selctionId:string,
options:Array<{label:string,value:string}>
label:string,
value:string,
setValue:(val:string)=>void,
withHideValue:boolean,
hideValueComponent:()=>ReactNode
}
export const Selction = (props:Props) => {
    const [showSelection,setShowSelection]=React.useState<boolean>(props.withHideValue?false:true)

const onSelect =(val:string)=>{
    if(showSelection ===true &&props.withHideValue){
        setShowSelection(false)
    }
    props.setValue(val)
}
  return (
    <div style={{display:'flex'}}>
   {!props.withHideValue&& <Label>{props.label}:</Label>}
   {showSelection?
    <select style={{lineHeight:'0'}} onChange={(e)=>onSelect(e.target.value)} name={props.selctionId} id={props.selctionId} value={props.value}>
    {props.options.map((element,index)=><option key={index} value={element.value}>{element.label}</option>)}
     </select>:
   <div style={{display:'flex',alignItems:"flex-start",justifyContent:"flex-end"}}>
    {props?.hideValueComponent()}
    <Edit style={{fill:'gray',marginLeft:'5px'}} onClick={()=>{
         
        setShowSelection(true)}} width={15} height={15}/>
    </div>}
  
    </div>
  )
}

Selction.defaultProps ={
    hideValueComponent:()=>null,
    withHideValue:false
}
