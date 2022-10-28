import { Card } from "../../componenets/Card"
import {ReactComponent as Logo} from  '../../assets/icons/Logo.svg'
import { Header } from "../../componenets/Text/header"
import { Button } from "../../componenets/Button"
import {useNavigate} from 'react-router-dom'
import {SignForm} from './form'
export const SignIn = () => {
  const navigate = useNavigate()

  return (
    <div style={{flex:1,flexDirection:'column', backgroundColor:'rgb(209,224,252)',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

      
       <Logo fill='rgb(42, 77, 141)' height={60} width={60} />
      <Header size={50} style={{color:'rgb(42, 77, 141)'}}>Carears</Header>
      </div>
  <Card style={{flexDirection:'column',width:'40ch',backgroundColor:'white',justifyContent:'space-around',alignItems:'center',height:'30vh'}}>
  <Header size={20} style={{color:'rgb(42, 77, 141)'}}>Login</Header>
    <SignForm />
  </Card> 
  </div>
  )
}
