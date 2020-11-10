import React, { useState, useEffect, useContext } from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import * as RoutePath from "../router/config";
import CreateUser from "./createUser";
import Dashboard from "./dashboard";

const DashboardScreens: React.FC = () => {
  return (
    <Switch>
      <Route path={RoutePath.DASHBOARD_LANDING}>
        <Dashboard />
      </Route>

      <Route path={RoutePath.DASHBOARD_CRAETE_USER}>
        <CreateUser />
      </Route>
      
      <Redirect from='*' to={RoutePath.DASHBOARD_LANDING} />
    </Switch>
  );
};

export default DashboardScreens;
