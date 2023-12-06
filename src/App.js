import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  Link,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

import "react-toastify/dist/ReactToastify.css";

import SignInContainer from "./containers/SignIn.container";
import SignUpContainer from "./containers/SignUp.container";
import DashboardContainer from "./containers/Dashboard.container";

const App = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state?.AuthReducer?.loginState);

  useEffect(() => {
    if (!isLogin) {
      navigate("/application/sign-in");
    }
  }, [isLogin]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/application/sign-in" element={<SignInContainer />} />
        <Route path="/application/sign-up" element={<SignUpContainer />} />
        <Route path="/application/dashboard" element={<DashboardContainer />} />
        <Route path="*" element={<Navigate to="/application/sign-in" />} />
      </Routes>
    </>
  );
};

export default App;
