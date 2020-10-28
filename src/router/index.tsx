import React, { FunctionComponent, Suspense } from 'react'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Loader from '../components/loader'
import * as RoutePath from './config'

 const Dashboard = React.lazy(() => import('../screens/dashboard'))
//  const CreateUser = React.lazy(() => import('../features/preLogin/Signin'))


const Routes: FunctionComponent = (): JSX.Element => {
  return (
    <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <Switch>
        <Route key={'dashboard'} exact path={RoutePath.DASHBOARD}>
            <Dashboard/>
        </Route>
        <Route key={'addnewuser'} exact path={RoutePath.ADD_NEW_USER}>
        </Route>
        <Redirect from="*" to={RoutePath.DASHBOARD} />
      </Switch>
      </BrowserRouter>
    </Suspense>
  )
}

export default Routes;
