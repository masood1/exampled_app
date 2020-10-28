import React, { FunctionComponent } from "react";
import clsx from "clsx";
import Routes from "./router/index";
import {
  Box,
  Drawer,
  Container,
  IconButton,
  Divider,
  CssBaseline,
} from "@material-ui/core";
import Header from "./components/header/index";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { useStyles } from "./appStyle";
import SideDrawer from './screens/sidebar/index';

// ADD ALL GLOBAL CONFIGURATIONS HERE

const App: FunctionComponent = (props: any): JSX.Element => {
  const {
    root,
    content,
    container,
    appBarSpacer,
    drawerPaper,
    toolbarIcon,
    drawerPaperClose,
  } = useStyles();

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <CssBaseline />
      <Box className={root}>
        <Header callBack={handleDrawerOpen} title='Dashboard' open={open} />
   {    
      // <Drawer
      //     variant='permanent'
      //     classes={{
      //       paper: clsx(drawerPaper, !open && drawerPaperClose),
      //     }}
      //     open={open}>
      //     <Box className={toolbarIcon}>
      //       <IconButton onClick={handleDrawerClose}>
      //         <ChevronLeftIcon />
      //       </IconButton>
      //     </Box>
      //     <Divider />
      //     <SideDrawer/>
      //   </Drawer>
      
      }
        <main className={content}>
          <Box className={appBarSpacer} />
          <Container maxWidth='lg' className={container}>
            <Routes />
          </Container>
        </main>
      </Box>
    </Box>
  );
};

export default App;
