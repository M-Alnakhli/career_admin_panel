
import {Label} from '../Text/label/label'

type Props ={
  name:string,
  label:string,
  action:()=>void,
  type:'dafault'|'cancel'|'submit'
}

export const Button =(props:Props)=>{
    return(
      <div className='button' onClick={props.action} >
      <Label label={props.label} />
      </div>
    )
} 




