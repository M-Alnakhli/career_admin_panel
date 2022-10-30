import React from 'react'
import { Button } from '../../componenets/Button'
import {Label} from '../../componenets/Text/label'
import {Selction} from '../../componenets/selction'
import { ApplicationEvaluationAPIReqType, ApplicationStatusType } from '../../api/typs'
import { Row } from '../../componenets/Row'
import { Header } from '../../componenets/Text/header'
import {useEvaluateApplicationAPI} from '../../api/evaluateApplication'
import {ReactComponent as PDF} from '../../assets/icons/PDF.svg'
import {ReactComponent as LinkedIn} from '../../assets/icons/LinkedIn.svg'
import { useUpdateStatusApplicationAPI } from '../../api/updateApplicationStatus'
type Props = {
firstName:string,
lastName:string,
location:string,
position:string,
applicationStatus:ApplicationStatusType,
linkedInURL:string|undefined,
applicantId:string

}
export const ProfileInfo = (props:Props) => {
  const [score,setScore] =React.useState<number|null>(null) 
  const [value,setValue]= React.useState<ApplicationStatusType>(props.applicationStatus)
  const [data,errors,loading] =useEvaluateApplicationAPI({applicant:props.applicantId,applicationStatus:props.applicationStatus})
  const [statusData,statusError,statusLoading,updateApplicationStatus]=useUpdateStatusApplicationAPI({applicationId:props.applicantId,applicationStatus:props.applicationStatus as ApplicationStatusType})

  const changeApllicationStatus =(val:ApplicationStatusType)=>{
    setValue(val)

  }
  const  statusColorRendarer =React.useCallback((status :ApplicationStatusType):string=>{
    switch(status){
        case 'Accepted':
            return 'green'
        case "Completed":
            return 'rgb(253,126,20)'
        case 'Rejected':
            return 'red'

        case 'Created':
            return 'grey'  
            
        default:
            return 'grey'
    }
}
,[])
  

const renderStatus=()=>{
  return(<Label  style={{fontFamily:'Exo-Medium',fontSize:'small',color:statusColorRendarer(value)}}>{value}</Label>)
}
const renderLinks =()=>{
  return (<div><a href={data?.rusemLink}>
  <PDF height={15} width={15}/>
 </a>
 <a href={data?.linkedInLink}>
   <LinkedIn height={15} width={15}/>
 </a>
 </div>)
} 

const renderSelcetion =()=>{
return <Selction  setValue={changeApllicationStatus as (val:string)=>void} value={value as string} withHideValue={true} selctionId='applicationStatus' options={options} hideValueComponent={renderStatus} label={'status'} />
} 
  const options = [
    {label:'Created',value:'Created'}, 
    {label:'Completed',value:'Completed'},
     {label:'Accepted',value:'Accepted'},
     {label:'Rejected',value:'Rejected'},
  ] 
  const tabel = [
    {label:"Applied For",value:props.position},
    {label:'Location',value:props.location},
    {label:'Links',value:data===null?"N/A":renderLinks()},
 {label:'Status',value:data===null?"N/A":renderSelcetion()}
  ,{label:'Total Score' ,value:data===null?"N/A":data.score}]
  
  return (
    <div style={{marginLeft:'30px'}}>
      <div>

      </div>
   
    
      {tabel.map((element,index)=><Row key={index} label={element.label} value={element.value}  />)}    
      </div>
  )
}




