import {Dashboard} from '../containers/dashboard'
import {Applications} from  '../containers/applications'
import {ApplicationDetails} from '../containers/applicationDetails'
import {ApplicationForm} from '../containers/applicationForm'
import {CarearDetails} from '../containers/carearDetails'
import {Carears} from '../containers/carears'
import {LandingPage} from '../containers/landingPage'
import {SignIn} from '../containers/signin'
import {SignUp} from '../containers/signup'
const  PrivateCandidateRoute_List =[
{name:'home',path:'/',element:<Dashboard/>},
{name:'alpplications',path:'/applications',element:<Applications/>},
{name:'applicationForm',path:'/applicationForm',element:<ApplicationForm/>},
{name:'applicationDetails',path:'/applicationDetails/:id',element:<ApplicationDetails/>},
{name:'careers',path:'/careers',element:<Carears/>},
{name:'carearDetails',path:'/carearDetails',element:<CarearDetails/>},

]

const  PublicCandidateRoute_List =[
{name:'signIn',path:'/',element:<SignIn/>},
{name:'signUp',path:'/signUp',element:<SignUp/>},

    ]
    

export {PrivateCandidateRoute_List,PublicCandidateRoute_List}
