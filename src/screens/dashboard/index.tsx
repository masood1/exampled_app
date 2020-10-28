import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useStyles } from "./style";
import Header from "../../components/header/index";
import UserList from "../../components/userList";
import SideDrawer from '../sidebar/index';

export default function Dashboard() {

  return (
        <Box>        
        <SideDrawer/>
        {
          // llop and display herer
          // <UserList />
        }
        <Divider variant='inset' component='li' />
        </Box>
  );
}
