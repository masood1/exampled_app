import React from "react";
import {
  List,
  ListItem,
  Button,
  Box,
  makeStyles,
  Drawer,
  Theme
} from "@material-ui/core";
import { SidebarMenuProps } from '../../types/components';
import { COPYGRAY } from '../../theme/colors';
import { useHistory } from "react-router-dom";
 
const style = {
  header: 0, //minHeight
  footer: 56, //minHeight
  defaultGutter: 84, //padding - left and right
  sidebarWidth: 360, //width,
};

const position= {
  ...style,
  height: `calc(100vh - ${style.header + style.footer + 2}px)`, // added 2 because of  header & footer border
  top: style.header + 1 // added 1 because of  header border
}

const drawerWidth = style.sidebarWidth, 
drawerHeight= position.height,  // added 2 because of  header & footer border
drawerTop= position.top; // added 1 because of  header border



const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& h5":{
      fontWeight: 500,
  },
  "& .MuiButton-text" : {
    padding: `${theme.spacing(2.5)}px`,
  }
  },
  item: {
    display: "flex",
    paddingTop: 0,
    paddingBottom: 0
  },
  icon: {
    // color: theme.palette.icon,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(3.3),
    "& > svg" : {
      width: 24,
      height: 24,
      fill: COPYGRAY
    }
  },
  active: {
    // color: theme.palette.primary.main,
    width: "100%",
    justifyContent: "flex-start",
    position: "relative",
    "&::after" : {
      content: `''`,
      position: "absolute",
      height: "60%",
      width: "3px",
      backgroundColor: COPYGRAY,
      right: "0px"
    },
    "& svg" : {
      fill: COPYGRAY
    },
    "& h5":{
      fontWeight: "bold",
    }
  },
  drawer: {
    width: drawerWidth,
    height: drawerHeight,
    overflow: "auto",
    flexShrink: 0,
    "& .MuiDrawer-paperAnchorDockedLeft" : {
      top: drawerTop,
      width: drawerWidth,
      height: drawerHeight,
      overflow: "auto",
      padding: `${theme?.spacing(6)}px 0px ${theme?.spacing(6)}px ${style.defaultGutter}px`,
    }
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  // drawerPaper: {
  //   top: drawerTop,
  //   width: drawerWidth,
  //   height: drawerHeight,
  //   overflow: "auto",
  // },
}));



/**
 *  * @materialuiProps
 *  - DrawerProps
 * @customProps
 * @prop {Array<Object>} pages       - Pass the list of pages as array of objects
 *  [
 *    {
 *       title: "Dashboard", // => string
 *       href: "/dashboard", => Route URL
 *       icon: <LayoutDashboard />, // => Icon
 *       mt: 5 // => Gutter - optional
 *    }
 *  ]
 * @prop {ReactRouterComponent} Router  - Pass Router component as like mentioned in the TODO
 * @return {Component}
 */


const SidebarMenu = (props: SidebarMenuProps) => {
  const { pages, routerLink, ...rest } = props;
  const history = useHistory();
  const { root, item, active, icon, drawer, drawerPaper } = useStyles();

  return (
    <Drawer open={true} variant="permanent" className={drawer}  classes={{
      paper: drawerPaper
    }} anchor="left" {...rest}>
    <List className={root}>
      {pages.map((page: any, i: number) => (
        <Box mt={page.mt ? page.mt : 0} mb={page.mb ? page.mb : 0} key={i}>
          <ListItem className={item} disableGutters key={page.title}>
            <Button
              // activeClassName={active}
              // component={routerLink}
              // to={page.href}
              // onClick={(event:any) => !page?.enableClick ? event.preventDefault(): ''}
              onClick={()=>{
                history.push(page.href)
              }}
            >
              <div className={icon}>{page.icon}</div>
              <h5>{page.title}</h5>
            </Button>
          </ListItem>
        </Box>
      ))}
    </List>
    </Drawer>
  );
};

export default SidebarMenu;
