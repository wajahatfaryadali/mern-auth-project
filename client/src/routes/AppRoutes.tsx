import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";

import { URL_ABOUT, URL_HOME, URL_LOGIN, URL_PROFILE, URL_SIGN_UP } from "./RoutesConstants";

const AppRoutes = () => {
  return (
      <Routes>
        <Route path={URL_LOGIN} element={<Login />} />
        <Route path={URL_SIGN_UP} element={<SignUp />} />
        <Route path={URL_HOME} element={<Home />} />
        <Route path={URL_ABOUT} element={<About />} />
        <Route path={URL_PROFILE} element={<Profile />} />
      </Routes>
  );
};

export default AppRoutes;
