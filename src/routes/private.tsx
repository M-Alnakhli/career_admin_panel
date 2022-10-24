import {Routes,Route} from 'react-router-dom'
import {Dashboard} from '../containers/dashboard'
export const PrivateRoute = () => {
  return (
   <Routes>
<Route path='/' element={<Dashboard/>} />
   </Routes>
  )
}
