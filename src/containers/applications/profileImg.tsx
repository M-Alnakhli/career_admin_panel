import {ReactComponent as Profile} from '../../assets/icons/Profile.svg'
import './index.scss'
type Props ={
img:string,
size:number
}
export const ProfileImg = (props:Props) => {
  return (
    <div>
    {props?.img!==undefined?<img className='applicantImg' style={{height:props.size,width:props.size, borderRadius:props.size/2}} src={props.img} />:<Profile className='applicantImg'/>}
    </div>
  )
}
