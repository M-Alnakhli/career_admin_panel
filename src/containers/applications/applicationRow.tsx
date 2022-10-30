import {ProfileImg} from './profileImg'
import {ProfileInfo} from './profileInfo'
import {Card} from '../../componenets/Card'
import { ApplicationStatusType } from '../../api/typs'
import './index.scss'
import { Header } from '../../componenets/Text/header'
type Props = {
firstName:string,
lastName:string,
img:string,
location:string,
position:string,
status?:'single'|'married',
applicationStatus:ApplicationStatusType
linkedInURL ?:string|undefined,
applicantId:string
}
export const ApplicationRow = (props:Props) => {
  return (
    <div style={{display:'flex',alignItems:'center'}} >
<ProfileImg img={props.img} size={200}/>
<ProfileInfo
 firstName={props.firstName}
lastName={props.lastName}
location={props.location}
position={props.position}
applicantId={props.applicantId}
linkedInURL={props.linkedInURL}
applicationStatus={props.applicationStatus}/>
    </div>
  )
}
