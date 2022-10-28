import { CSSProperties, ReactNode } from 'react'
import './index.scss'

type Props ={
  name?:string,
  style?:CSSProperties,
  children?:ReactNode
}

export const Label:React.FC<Props> =({name,style,children})=>{



    return(
      <p className='label' style={{...style}}>{children}</p> 
    )
} 



Label.defaultProps= {
  name:'label',
  children:'label',
  style:{}
}