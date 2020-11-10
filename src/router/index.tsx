import React, { FunctionComponent, Suspense } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Box } from "@material-ui/core";
import Loader from "../components/loader";
import * as RoutePath from "./config";

const Connection = React.lazy(() => import("../screens/connection/index"));

const Routes: FunctionComponent = (): JSX.Element => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Switch>
          <Route key={"dashboard"} path={RoutePath.DASHBOARD}>
            <Box display='flex'>
              <Connection />
            </Box>
          </Route>
         
          <Redirect from='*' to={RoutePath.DASHBOARD_LANDING} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routes;
