/** @format */

import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../components/layout";
import UserDetailsPage from "../components/ui/dashboard/users/user-details";
import { ROUTES } from "../constants/routes";
import NotFound from "../components/ui/not-found";
import LoginContainer from "../container/auth/login";
import UsersContainer from "../container/dashboard/users";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.auth.login} replace />} />
      <Route path={ROUTES.auth.login} element={<LoginContainer />} />
      <Route element={<DashboardLayout />}>
        <Route path={ROUTES.dashboard.users} element={<UsersContainer />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
