import React, { ReactNode } from 'react'
import './index.scss'
type Props = {
    children?:ReactNode,
    style ?:React.CSSProperties,
    onClick?:()=>void
}
export const Card :React.FC<Props>= ({children,style,onClick}) => {
  return (
    <div onClick={typeof onClick ==='function'?onClick:()=>{}} className='card' style={{...style}}>{children}</div>
  )
}

Card.defaultProps={
    style:{}
}

