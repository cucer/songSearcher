import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import {
  Backdrop,
  CircularProgress,
  Container,
  Button,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import Pagination from "@material-ui/lab/Pagination";
import { postFavorites, delFavorites, makeID } from "../common/api";
import FilterIcon from "../img/assets/icons/filter.svg";
// import FavoriteLogo from "../img/assets/icons/favorite.svg";
// import UnfavoriteLogo from "../img/assets/icons/favorite_border.svg";
import Circle from "./Circle";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "black",
    maxHeight: 580,
    position: "relative",
    overflow: "auto",
    fontFamily: "Montserrat",
  },
  filter: {
    display: "flex",
    justifyContent: "flex-end",
    paddingLeft: 15,
    paddingRight: 15,
    color: "white",
  },
  filterIcon: {
    backgroundColor: "white",
    padding: 5,
    borderRadius: "50%",
  },
  refresh: {
    color: "white",
  },
  filterBar: {
    display: "flex",
    justifyContent: "flex-end",
    color: "white",
  },
  filterText: {
    paddingRight: 10,
    fontSize: "0.8rem",
    fontFamily: "Montserrat",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  list: {
    color: "white",
  },
  icon: {
    color: "white",
  },
  inline: {
    display: "inline",
    color: "white",
    fontWeight: "lighter",
    fontFamily: "Montserrat",
  },
  level: {
    paddingRight: 50,
    fontSize: 12,
  },
  pagination: {
    padding: 10,
    color: "white",
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [hideLevel, setHideLevel] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(100);
  let filteredData = [""];

  const getFilteredList = (data, searchInput) => {
    return (
      data.filter((item) =>
        searchInput !== ""
          ? item.title && item.title.includes(searchInput)
          : true
      ) || []
    );
  };

  const handlePostFavorites = async (id) => {
    setLoading(true);
    await postFavorites(id);
    setLoading(false);
    props.handleRequest();
  };

  const handleDelFavorites = async (id) => {
    setLoading(true);
    await delFavorites(id);
    setLoading(false);
    props.handleRequest();
  };

  const getLevelFilteredSongs = async (level) => {
    setPage(0);
    await props.handleLevelFilteredSongs(level);
  };

  const handleFilter = (status) => {
    if (status === true) {
      setHideLevel(true);
    } else {
      setHideLevel(false);
    }
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  filteredData = getFilteredList(props.songs, props.searchInput);
  makeID();

  return (
    <div className={classes.root}>
      {filteredData != "" && (
        <Container maxWidth="lg" className={classes.filter}>
          {hideLevel ? (
            <>
              <IconButton
                edge="end"
                disableRipple
                className={classes.icon}
                onClick={() => {
                  handleFilter(false);
                }}
              >
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.filterText}
                >
                  FILTER BY LEVEL
                </Typography>
                <img
                  src={FilterIcon}
                  alt="Filter Icon"
                  className={classes.filterIcon}
                />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton
                edge="end"
                disableRipple
                className={classes.icon}
                onClick={() => {
                  handleFilter(true);
                }}
              >
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.filterText}
                >
                  HIDE FILTER
                </Typography>
                <img
                  src={FilterIcon}
                  alt="Filter Icon"
                  className={classes.filterIcon}
                />
              </IconButton>
            </>
          )}
        </Container>
      )}
      {!hideLevel && (
        <Container maxWidth="lg" className={classes.filterBar}>
          <IconButton
            onClick={() => {
              props.handleRequest();
            }}
          >
            <AutorenewIcon className={classes.refresh} />
          </IconButton>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(1);
            }}
          >
            <Circle level={1} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(2);
            }}
          >
            <Circle level={2} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(3);
            }}
          >
            <Circle level={3} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(4);
            }}
          >
            <Circle level={4} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(5);
            }}
          >
            <Circle level={5} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(6);
            }}
          >
            <Circle level={6} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(7);
            }}
          >
            <Circle level={7} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(8);
            }}
          >
            <Circle level={8} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(9);
            }}
          >
            <Circle level={9} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(10);
            }}
          >
            <Circle level={10} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(11);
            }}
          >
            <Circle level={11} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(12);
            }}
          >
            <Circle level={12} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(13);
            }}
          >
            <Circle level={13} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(14);
            }}
          >
            <Circle level={14} />
          </Button>
          <Button
            disableRipple
            style={{ color: "white" }}
            onClick={() => {
              getLevelFilteredSongs(15);
            }}
          >
            <Circle level={15} />
          </Button>
        </Container>
      )}
      <List className={classes.list}>
        {filteredData
          .slice(
            (page !== 0 ? page - 1 : page) * rowsPerPage,
            (page !== 0 ? page - 1 : page) * rowsPerPage + rowsPerPage
          )
          .map((song, i) => (
            <ListItem
              key={i}
              alignItems="flex-start"
              style={i % 2 ? { background: "#101010" } : { background: "#000" }}
            >
              <ListItemAvatar>
                <Avatar variant="square" alt="Song Images" src={song.images} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Fragment>
                    <Typography
                      component="span"
                      variant="body1"
                      className={classes.inline}
                    >
                      {song.title}
                    </Typography>
                  </Fragment>
                }
                secondary={
                  <Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                    >
                      {song.artist}
                    </Typography>
                  </Fragment>
                }
              />
              <ListItemSecondaryAction>
                <div className={classes.level}>
                  <Circle level={song.level} />
                </div>
              </ListItemSecondaryAction>
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  disableRipple
                  className={classes.icon}
                  onClick={() => {
                    song.songId
                      ? handleDelFavorites(song.songId)
                      : handlePostFavorites(song.id);
                  }}
                >
                  {song.songId ? (
                    <FavoriteIcon style={{ color: "#dc001c" }} />
                  ) : (
                    <FavoriteBorderIcon />
                  )}
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
      {filteredData != "" && (
        <StylesProvider injectFirst>
          <Pagination
            count={Math.ceil(props.songs.length / 100)}
            className={classes.pagination}
            page={page}
            onChange={handleChangePage}
            size="large"
          />
        </StylesProvider>
      )}

      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

Main.propTypes = {
  songs: PropTypes.array.isRequired,
  searchInput: PropTypes.any,
  handleRequest: PropTypes.func,
  handleLevelFilteredSongs: PropTypes.func,
};
