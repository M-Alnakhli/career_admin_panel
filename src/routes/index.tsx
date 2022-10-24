import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import {SideBar} from '../componenets/Drawer'
import {PrivateRoute } from './private' 
import './index.scss'

export const Router =()=>{
    const [logedIng,setLogedIn]= React.useState(true)

return (
    <div>
        <BrowserRouter>

       { logedIng?
       <div id="mainContainer">
       <SideBar/>
       <PrivateRoute/>
        </div>
       : <Route>

        </Route>}

        </BrowserRouter>

        
      
    </div>
)
}