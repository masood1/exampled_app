import React, { FunctionComponent } from "react";
import Routes from "./router/index";
import { Box, CssBaseline } from "@material-ui/core";
import Header from "./components/header/index";
import { useStyles } from "./appStyle";

// ADD ALL GLOBAL CONFIGURATIONS HERE

const App: FunctionComponent = (props: any): JSX.Element => {
  const { root } = useStyles();

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <CssBaseline />
      <Box className={root}>
        <Header callBack={handleDrawerOpen} title='Dashboard' open={open} />
        <Routes />
      </Box>
    </Box>
  );
};

export default App;
