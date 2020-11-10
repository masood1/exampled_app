import React from "react";
import clsx from "clsx";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./style";
import { LoadWeb3 } from "../../util/LoadWeb3";

const Header = (props: any) => {
  const { callBack, title, open } = props;
  const classes = useStyles();

  return (
    <AppBar
      position='absolute'
      className={clsx(classes.appBar, open && classes.appBarShift)}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='open drawer'
          onClick={callBack}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          component='h1'
          variant='h6'
          color='inherit'
          noWrap
          className={classes.title}
        >
          {title}
        </Typography>

        <Box ml={10}>
          <Button
            onClick={() => ( LoadWeb3())}
            color={"secondary"}
            variant='contained'
          >
            connect
          </Button>
        </Box>

        {
          //  <IconButton color='inherit'>
          //       <Badge badgeContent={4} color='secondary'>
          //       Connect
          //       </Badge>
          //     </IconButton>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;
