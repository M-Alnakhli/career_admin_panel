import { Dashboard } from "../containers/dashboard";
import { Applications } from "../containers/applications";
import { ApplicationDetails } from "../containers/applicationDetails";
import { ApplicationForm } from "../containers/applicationForm";
import { CarearDetails } from "../containers/carearDetails";
import { Carears } from "../containers/carears";
import { SignIn } from "../containers/signin";
import { SignUp } from "../containers/signup";
import { MyApplications } from "../containers/myApplications";
import { CreateForm } from "../containers/applicationForm/createForm";
import { UpdateForm } from "../containers/applicationForm/updateForm";
const PrivateAdminRoute_List = [
  { name: "home", path: "/", element: <Dashboard /> },
  { name: "alpplications", path: "/applications", element: <Applications /> },
  {
    name: "applicationForm",
    path: "/applicationForm",
    element: <ApplicationForm />,
  },
  {
    name: "applicationDetails",
    path: "/applicationDetails/:id",
    element: <ApplicationDetails />,
  },
  { name: "careers", path: "/carears", element: <Carears /> },
  { name: "carearDetails", path: "/carearDetails", element: <CarearDetails /> },
];

const PrivateCandidateRoute_List = [
  { name: "home", path: "/", element: <Dashboard /> },
  {
    name: "alpplications",
    path: "/myownapplications",
    element: <MyApplications />,
  },
  {
    name: "applicationForm",
    path: "/applicationForm",
    element: <ApplicationForm />,
  },
  {
    name: "applicationDetails",
    path: "/applicationDetails/:id",
    element: <ApplicationDetails />,
  },
  { name: "careers", path: "/carears", element: <Carears /> },
  { name: "carearDetails", path: "/carearDetails", element: <CarearDetails /> },
  { name: "createForm", path: "/createForm", element: <CreateForm /> },
   {name:'updateForm',path:"/updateFormPage",element:<UpdateForm/>}
];
const PublicCandidateRoute_List = [
  { name: "signIn", path: "/", element: <SignIn /> },
  { name: "signUp", path: "/signUp", element: <SignUp /> },
];

export {
  PrivateCandidateRoute_List,
  PublicCandidateRoute_List,
  PrivateAdminRoute_List,
};
