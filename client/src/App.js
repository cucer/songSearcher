import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  CssBaseline,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import Banner from "./components/Banner";
import Main from "./components/Main";
import { getAllData, getLevelFilteredSongs } from "./common/api";
import "./css/App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "black",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  container: {
    padding: 10,
    height: 600,
  },
}));

function App() {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [songs, setSongs] = useState([]);

  const getData = async () => {
    setLoading(true);
    await getAllData().then((data) => {
      setSongs(data);
    });
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (input) => {
    setInput(input);
  };

  const handleCloseLoading = () => {
    setLoading(false);
  };

  const handleRequest = () => {
    getData();
  };

  const handleLevelFilteredSongs = async (level) => {
    setLoading(true);
    await getLevelFilteredSongs(level).then((data) => {
      setSongs(data);
    });
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Banner handleInput={handleInput} />
      <Container className={classes.container}>
        <Main
          songs={songs}
          searchInput={input}
          handleRequest={handleRequest}
          handleLevelFilteredSongs={handleLevelFilteredSongs}
        />
      </Container>
      <Backdrop
        className={classes.backdrop}
        open={loading}
        onClick={handleCloseLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default App;
