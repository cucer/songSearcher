import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: 0,
  },
}));

export default function Circle(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="static"
          value={(props.level * 100) / 15}
          style={
            props.level <= 5
              ? { color: "#6fc13e" }
              : props.level > 5 && props.level <= 10
              ? { color: "#ff8e00" }
              : { color: "#dc001c" }
          }
        />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="initial">
            {props.level}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

Circle.propTypes = {
  level: PropTypes.number,
};
