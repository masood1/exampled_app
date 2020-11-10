import React from "react";
import {
  Box,
  Theme,
  Backdrop,
  makeStyles,
  CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    zIndex: 10000,
    opacity: "0.7 !important",
    backgroundColor: theme?.palette?.common?.white,
  },
}));

interface LoaderProps {
  enable: boolean;
}

const Loader = (props: LoaderProps) => {
  const { enable } = props;
  const { root } = useStyles();

  if (enable) {
    return (
      <Backdrop className={root} open={enable}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
        >
          <CircularProgress />
        </Box>
      </Backdrop>
    );
  }
  return null;
};

Loader.defaultProps = {
  enable: false,
};

export default Loader;
