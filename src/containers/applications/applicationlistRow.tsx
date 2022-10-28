import {ProfileImg} from './profileImg'
import {ApplicationListItem, ApplicationStatusType} from '../../api/typs'
import {useNavigate} from "react-router-dom"
import { Row} from '../../componenets/Row'
import { Label } from "../../componenets/Text/label"
import './index.scss'
import React from "react"
export type Props  =ApplicationListItem
export const ApplicationlistRow = (props:Props) => {
    const navigation  =useNavigate()
    const onClick=()=>{
        navigation(`/applicationDetails/${props.applicationId}`,{state:{item:{...props}}})
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
  return (
    <div className="listItem" onClick={onClick}>
        <ProfileImg size={50} img={props.img as string}/>
        <div className="listItemInfo">
          <div className="itemInfoRow">
        <Label style={{fontFamily:'Exo-Medium',fontSize:'small'}}>{`${props.firstName} ${props.lastName} `}</Label>
        <Row label={'Position'} value={props.posistion}/>
        </div>

            <div style={{position:'relative'}}>
        <Label  style={{fontFamily:'Exo-Medium',fontSize:'small',position:'absolute',top:'0px',right:'5px',color:statusColorRendarer(props.status as ApplicationStatusType )}}>{props.status}</Label> 
        </div>

       </div>
    </div>
  )
}
