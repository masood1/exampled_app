import React from "react";
import { Link, makeStyles, Typography } from "@material-ui/core";
import { CopyRightProps } from "../../types/components";

/**
 * @typedef {object} Props
 * @materialuiProps
 *  - TypographyProps
 * @customProps
 * @prop {string} fontSize - Size of the font text in Copyright
 * @prop {Component} children - content  text part in Copyright
 * @return {Component}
 */

const useStyles = makeStyles((theme) => ({
  main: { display: "flex", alignItems: "center" },
  logo: { marginRight: theme.spacing(1.5) },
}));

const Copyright = (props: CopyRightProps) => {
  const classes = useStyles(props);
  const { fontSize, children, ...rest } = props;
  const { main } = classes;

  return (
    <div className={main}>
      {
        //TODO: add logo
      }
      <Typography
        style={{ fontSize: fontSize }}
        variant='body2'
        color='textSecondary'
        align='center'
      >
        {"Copyright © "}
        <Link color='inherit' href=''>
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

Copyright.defaultProps = {
  fontSize: 12,
};

export default Copyright;
