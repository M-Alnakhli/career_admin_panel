import {Routes,Route} from 'react-router-dom'

import {PrivateCandidateRoute_List} from './routLists'
type Props={

}
export const PrivateRoute = (props:Props) => {
  return (
   <Routes>
{PrivateCandidateRoute_List.map((item,index:number)=><Route key={index} path={item.path}  element={item.element} />)}
   </Routes>
  )
}


export const PrivateUserRoute =(props:Props)=>{
  return (
    <Routes>
 {PrivateCandidateRoute_List.map((item,index:number)=><Route key={index} path={item.path}  element={item.element} />)}
    </Routes>
   )
}
