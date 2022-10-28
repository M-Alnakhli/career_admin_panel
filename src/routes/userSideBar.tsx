
import { useNavigate } from 'react-router-dom'
import {SideBar} from '../componenets/Drawer'
import { ReactComponent as Home } from '../assets/icons/Home.svg'
import {ReactComponent as Suitcase} from '../assets/icons/Suitcase.svg'
import {ReactComponent as Logout} from '../assets/icons/logout.svg'
import {ReactComponent as CV} from '../assets/icons/application.svg'
type Props = {
    logout:()=>void
}
export const UserSidebarNavigator = (props:Props) => {
    const navigate = useNavigate()
   

const navigationAction = (route:string)=>{
    return navigate(route)
}
    
const logout =()=>{
   props.logout()
   navigate('/')
}
  const routes = [{name:'home',
  icon:()=><Home fill='white' height={20} width={20} style={{marginRight:'10px'}}/>,
  label:'Home',
  action:()=>navigationAction("/")
  },
  {name:'applications',
  icon:()=><CV fill='white' height={25} width={25} style={{marginRight:'10px'}}/>,
  label:'My Applications',
  action:()=>navigationAction("/applications")
  },
  {name:'carears',
  icon:()=><Suitcase fill='white' height={25} width={25} style={{marginRight:'10px'}}/>,
  label:'Carears',
  action:()=>navigationAction("carears")
  },
  {name:'logout',
  icon:()=><Logout fill='white' height={25} width={25} style={{marginRight:'10px'}}/>,
  label:'Logout',
  action:logout
  }]
  return (
    <SideBar routes={routes}/>
  )
}
