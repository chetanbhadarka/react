import React, { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
  Link,
} from "react-router-dom";

import SignInContainer from "./containers/SignIn.container";
import DashboardContainer from "./containers/Dashboard.container";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/application/sign-in" element={<SignInContainer />} />
        <Route path="/application/dashboard" element={<DashboardContainer />} />
        <Route path="*" element={<Navigate to="/application/sign-in" />} />
      </Routes>
    </>
  );
};

export default App;
