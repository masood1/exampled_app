import React from "react";
import { NavLink as RouterLink } from "react-router-dom";
import SidebarMenu from '../../components/sidebarMenu/index';
import { pages } from './pages';
let SideDrawer = (props: any) => {
    return (
        <SidebarMenu pages={pages} routerLink={RouterLink} />
    );
};

export default SideDrawer;
