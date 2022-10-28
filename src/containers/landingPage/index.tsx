import { Card } from "../../componenets/Card"
import {ReactComponent as Logo} from  '../../assets/icons/Logo.svg'
import { Header } from "../../componenets/Text/header"
import { Button } from "../../componenets/Button"
import {useNavigate} from 'react-router-dom'
import { Label } from "../../componenets/Text/label"
export const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div style={{flex:1,flexDirection:'column', backgroundColor:'rgb(42, 77, 141)',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

      
       <Logo fill='white' height={60} width={60} />
      <Header size={50} style={{color:'white'}}>Carears</Header>
      <Label>#1 Profisinal Hiring Site </Label>
      </div>
      <Button name="login" label="Login" style={{width:'25ch',height:'4vh',alignItems:'center'}} action={()=>navigate('/signin')}
    color={'white'} 
   type={'Submit'}/>

<Button name="register" label="Register" style={{width:'25ch',height:'4vh',alignItems:'center',marginTop:'10px'}} action={()=>navigate('/signup')}
    color={'white'} 
   type={'Submit'}/>
     
    </div>
  )
}
