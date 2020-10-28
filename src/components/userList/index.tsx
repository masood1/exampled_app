import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { citizenDetails } from "../../types/components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      // maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
  })
);

const UserList = (props: citizenDetails) => {
  const classes = useStyles();
  const { id, age = 0, city = "", name = "", someNote = "" } = props;

  return (
    <List className={classes.root} key={id}>
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar alt={name} src='' />
        </ListItemAvatar>
        <ListItemText
          primary={name + " - " + city}
          secondary={
            <>
              {age !== 0 && (
                <Typography
                  component='span'
                  variant='body2'
                  className={classes.inline}
                  color='textPrimary'
                >
                  Age {age}
                </Typography>
              )}
              <Box>{someNote! == "" && "Note: " + someNote}</Box>
            </>
          }
        />
      </ListItem>
    </List>
  );
};

export default UserList;
