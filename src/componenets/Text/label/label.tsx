import './style'

type Props ={
  name?:string,
  label?:string,
  type?:'dafault'|'cancel'|'submit'

}

export const Label =(props:Props)=>{



    return(
      <p >{props.label}</p> 
    )
} 



