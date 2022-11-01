import React from "react";
import { BrowserRouter } from "react-router-dom";
import { SidebarNavigator } from "./sidebar";
import { PrivateRoute, PrivateUserRoute, PrivateAdminRoute } from "./private";
import "./index.scss";
import { TopBar } from "../componenets/topBar";
import { PublicRoute } from "./public";
import { AuthContextType, AuthInfoType } from "../api/typs";
import { UserSidebarNavigator } from "./userSideBar";
type Props = {};

const defaultState = {
  authInfo: { role: null, token: null },
  login: (auth: AuthInfoType) => {},
  logout: () => {},
};
export const AuthContext = React.createContext<AuthContextType>(defaultState);
export const Router = (props: Props) => {
  const [logedIng, setLogedIn] = React.useState<{
    role: "admin" | "user" | null;
    token: string | null;
  }>({ role: null, token: null });

  const logout = () => {
    setLogedIn({ role: null, token: null });
  };

  const login = (auth: AuthInfoType) => {
    setLogedIn(auth);
  };

  return (
    <div>
      <AuthContext.Provider value={{ login, authInfo: logedIng, logout }}>
        {logedIng.role !== null && <TopBar />}
        <BrowserRouter>
          {logedIng.role === "admin" ? (
            <div className="mainContainer">
              <SidebarNavigator logout={logout} />
              <div className="pageContainer">
                <PrivateAdminRoute />
              </div>
            </div>
          ) : logedIng.role === "user" ? (
            <div className="mainContainer">
              <UserSidebarNavigator logout={logout} />
              <div className="pageContainer">
                <PrivateUserRoute />
              </div>
            </div>
          ) : (
            <div className="publicRoute">
              <PublicRoute />
            </div>
          )}
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
};
