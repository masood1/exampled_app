import React from "react";
import { Home, PlusOne } from "@material-ui/icons";
import * as RoutePath from '../../router/config';

import { SIDEBAR_TITLES } from "../../util/constants";
/**
 * entitlement key refer to --> based on entitlement key we will hide and show tab
 * disableOnClick key refer to --> will show tab always in dashboard based on entitlement condition will enable or disable functionality
 */
export const pages = [
  {
    title: SIDEBAR_TITLES.DASHBOARD,
    href:  RoutePath.DASHBOARD_LANDING,
    icon: <Home />,
    mt: 2
  },

  {
    title: SIDEBAR_TITLES.CREATEUSER,
    href: RoutePath.DASHBOARD_CRAETE_USER,
    icon: <PlusOne />,
    mt: 2
  },
];
