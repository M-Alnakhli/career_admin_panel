import React from 'react'
import { Button } from '../../componenets/Button'
import {Label} from '../../componenets/Text/label'
import {Selction} from '../../componenets/selction'
type ApplicationStatusType='Created'| 'Completed'| 'Accepted'| 'Rejected'
type Props = {
firstName:string,
lastName:string,
location:string,
jobName:string,
gender:number,
position:string,
status:'single'|'married',
applicationStatus:ApplicationStatusType

}
export const ProfileInfo = (props:Props) => {
  const [score,setScore] =React.useState<number|null>(null) 
  const [value,setValue]= React.useState<ApplicationStatusType>(props.applicationStatus)

  const evalueate =()=>{
    setScore(5)
  } 

  const change
  const data = [
    {label:"Name",value:`${props.firstName} ${props.lastName}`},
    {label:"Required Position",value:`${props.firstName} ${props.lastName}`},
    {label:"Gender",value:props.gender},
    {label:"Score",value:score},
    
  ]
  return (
    <div>
      <div>
     <Selction/>
      </div>
      <div>
      {}
      </div>

      {data.map((element,index)=><Row key={index} label={element.label} value={element.value}  />)}
      <Button label='evaluate' name={'evlauate'} action={evalueate } color={score===null?'green':'gray'}/>

      </div>
  )
}




type RowTypes = {
    label:string,
    value:string|number|undefined|null,
}
const Row =(props:RowTypes)=>{
    return(<div className='tableRow'>
        <div className='lableContainer'>
        <Label style={{color:'rgb(158,156,156)'}} label={props.label} />
        <p style={{color:'rgb(158,156,156)'}}>:</p>
        </div>
        <Label  label={props.label} />
    </div>) 
}