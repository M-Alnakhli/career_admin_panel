import './index.scss'
import { ReactComponent as Home } from '../../assets/icons/Home.svg'
import {DrawerRaw} from './DrawerRaw'
import { ConfigType } from './types'

import React from 'react'
type Props={
  routes:Array<ConfigType>
}

export const SideBar = (props:Props) => {
  const [activeIndex,setActiveIndex]=React.useState(0)

  const sideAction =(action:()=>void,index:number)=>{
      if(activeIndex===index)return
      setActiveIndex(index)
      action()
  }
  
  return (
    <div id='sidebar'>
      
  {props.routes.map((element:ConfigType,index:number)=><DrawerRaw sideAction={sideAction} key={index} index={index}  activeIndex={activeIndex} config={element}/>)}
     
    </div>
  )
}

SideBar.defaultProps={
  routes:[{name:'home',
  icon:()=><Home fill='white' height={20} width={20} style={{marginRight:'10px'}}/>,
  label:'Home',
  action:()=>console.log("hellow")
  }]
}