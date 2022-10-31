import { Route, Routes } from "react-router-dom";
import { PublicCandidateRoute_List } from "./routLists";

export const PublicRoute = () => {
  return (
    <Routes>
      {PublicCandidateRoute_List.map((item, index: number) => (
        <Route key={index} path={item.path} element={item.element} />
      ))}
    </Routes>
  );
};
