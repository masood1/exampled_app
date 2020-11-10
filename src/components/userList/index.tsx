import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";
import { citizenDetails } from "../../types/components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      display: "flex",
      alignItems: "center",
      justifycontent: "center",
      padding: "10px",
      boxShadow: "3px",
      margin: "20px",
      width: "419px",
    },
    inline: {
      display: "inline",
    },
  })
);

const UserList = (props: citizenDetails) => {
  const classes = useStyles();
  const { id, blockNumber = 0,callBack = ()=>{}, city = "", name = "", someNote = "" } = props;

  return (
    <List className={classes.root} key={id}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={name} src='' />
        </ListItemAvatar>
        <ListItemText
          primary={<h3>Name : {name}</h3>}
          secondary={
            <>
              {blockNumber !== 0 && (
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textPrimary'
                >
                  <b> Block Number - </b> {blockNumber}
                </Typography>
              )}
              <Box>{someNote! == "" && "Note: " + someNote}</Box>
            </>
          }
        />

        <Button
          variant='contained'
          onClick={() => callBack()}
          color='primary'
        >
          View Note
        </Button>
      </ListItem>
    </List>
  );
};

export default UserList;
