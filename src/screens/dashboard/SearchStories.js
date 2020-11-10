import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Grid,
  Paper,
  InputBase,
  IconButton,
  Typography,
  SvgIcon,
  Box
} from "@mashreq-digital/ui";
import { Search } from "@mashreq/icons";
import { Collection, AutoSizer, Column, Table } from "react-virtualized";
import "react-virtualized/styles.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  iconContainer: {
    flex: 1,
    display: "flex",
    height: "calc(100vh - 118px)",
    padding: "0 25px",
    width: "100vw"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#F8F9F9"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  Searchroot: {
    padding: "2px 4px",
    display: "flex",
    width: 400
  },
  searchCenter: {
    margin: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  headerStyle: {
    marginTop: "20px"
  }
}));

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay] // Only re-call effect if value or delay changes
  );
  return debouncedValue;
};

export const SearchStories = ({ Icons, type }) => {
  const classes = useStyles();
  const keys = Object.keys(Icons);
  const [searchTerm, setSearchTerm] = React.useState("");
  const searchTermForQuery = useDebounce(searchTerm, 500);
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  React.useEffect(() => {
    if (searchTermForQuery.length > 0) {
      const start = performance.now();
      const regex = new RegExp(searchTermForQuery, "ig");
      const results = keys.filter(
        icon =>
          // icon.toLowerCase().startsWith(searchTermForQuery.toLowerCase())
          // icon.toLowerCase().indexOf(searchTermForQuery.toLowerCase()) > -1
          !!icon.match(regex)
      );
      const end = performance.now();
      // console.log("time taken,", end - start);
      setSearchResults(results);
    } else {
      setSearchResults(keys);
    }
  }, [searchTermForQuery]);

  const renderIconBySVG = componentName => {
    const Component = Icons[componentName];
    // console.log(componentName, "renderComponent")
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        {type === "svg" ? (
          <SvgIcon
            componentName
            color="secondary"
            style={{ fontSize: 50 }}
            component={Component}
          />
        ) : (
          <Component width="70px" height="70px" />
        )}
        <Typography variant="Body1" className={classes.headerStyle}>
          {componentName}
        </Typography>
      </Box>
    );
  };

  const getRowForIndex = index => {
    const actualIndex = index === 0 ? 0 : index * 3;
    const ret = {
      "0": searchResults[actualIndex] || undefined,
      "1": searchResults[actualIndex + 1] || undefined,
      "2": searchResults[actualIndex + 2] || undefined
    };
    return ret;
  };

  return (
    <div>
      <div className={classes.searchCenter}>
        <Paper component="form" className={classes.Searchroot}>
          <InputBase
            className={classes.input}
            placeholder="Search Icons"
            value={searchTerm}
            onChange={handleChange}
          />
          <IconButton type="submit" onClick={handleChange}>
            <Search />
          </IconButton>
        </Paper>
      </div>
      <div className={classes.iconContainer}>
        <AutoSizer>
          {({ height, width }) => (
            <Table
              height={height}
              rowCount={
                searchResults.length ? Math.ceil(searchResults.length / 3) : 0
              }
              rowGetter={({ index }) => getRowForIndex(index)}
              rowHeight={({ index }) => 150}
              useDynamicRowHeight={true}
              width={width}
              headerHeight={20}
            >
              <Column
                flexGrow={1}
                dataKey="0"
                width={200}
                cellRenderer={({ cellData }) =>
                  cellData && renderIconBySVG(cellData)
                }
              />
              <Column
                flexGrow={1}
                width={200}
                dataKey="1"
                cellRenderer={({ cellData }) =>
                  cellData && renderIconBySVG(cellData)
                }
              />
              <Column
                flexGrow={1}
                width={200}
                dataKey="2"
                cellRenderer={({ cellData }) =>
                  cellData && renderIconBySVG(cellData)
                }
              />
            </Table>
          )}
        </AutoSizer>
      </div>
    </div>
  );
};
