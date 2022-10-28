import './index.scss'
import { ReactComponent as Home } from '../../../assets/icons/Home.svg'
import type{ConfigType} from '../types'

type Props={
  config:ConfigType,
  activeIndex:number,
  index:number
  sideAction:(action:()=>void,index:number)=>void
}

export const DrawerRaw = (props:Props) => {

  return (
    <button className='button' style={{backgroundColor:props.index===props.activeIndex?'rgb(4,29,72)':'transparent'}}   onClick={()=>props.sideAction(props.config.action,props.index)}>{props.config.icon()}{props.config.label}</button>
  )
}

DrawerRaw.defaultProps={
  config:{name:'home',
  icon:()=><Home fill='white' height={20} width={20} style={{marginBlockEnd:'10px'}}/>,
  label:'Home',
  action:()=>console.log("hellow")
  }
}