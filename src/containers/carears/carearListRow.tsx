
import {ApplicationStatusType, CareerConfig} from '../../api/typs'
import {useNavigate} from "react-router-dom"
import { Row} from '../../componenets/Row'
import { Label } from "../../componenets/Text/label"
import './index.scss'
import React from "react"
export type Props  =CareerConfig
export const CarearlistRow = (props:Props) => {
    const navigation  =useNavigate()
    const onClick=()=>{
        navigation(`/carearDetails/${props.positionId}`,{state:{item:{...props}}})
    }
   
  return (
    <div className="listItem" onClick={onClick}>
        <div className="listItemInfo">
          <div className="itemInfoRow">
        <Label style={{fontFamily:'Exo-Medium',fontSize:'medium'}}>{`${props.postion}`}</Label>
        <Row label={'Location'} value={props.postion }/>
        </div> 
       </div>


    </div>
  )
}
