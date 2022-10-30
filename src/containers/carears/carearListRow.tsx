
import {ApplicationStatusType, AuthContextType, CareerConfig} from '../../api/typs'
import {useNavigate} from "react-router-dom"
import { Row} from '../../componenets/Row'
import { Label } from "../../componenets/Text/label"
import './index.scss'
import React from "react"
import { AuthContext} from '../../routes'
import { Button } from '../../componenets/Button'
export type Props  =CareerConfig
export const CarearlistRow = (props:Props) => {
    const navigation  =useNavigate()
    const authContext :AuthContextType = React.useContext(AuthContext)
    
    const onClick=()=>{
        navigation(`/createForm`,{state:{item:{...props}}})
    }
   
  return (
    <div className="listItem" onClick={onClick}>
        <div className="listItemInfo">
          <div className="itemInfoRow">
        <Label style={{fontFamily:'Exo-Medium',fontSize:'medium'}}>{`${props.position}`}</Label>
        <Row label={'Location'} value={props.location }/>
        </div> 
        <div style={{position:'relative'}}>
        <div  style={{position:'absolute',bottom:'0px',right:'5px',display:'flex'}}>
{authContext.authInfo.role==='user'&&<Button  color="white" type={'Next'} action={onClick} name="apply" label="Apply" style={{width:'7ch'}}/>}
</div>
</div>
       </div>


    </div>
  )
}
