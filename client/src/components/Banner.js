import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { heroImage } from "../img/assets";
import searchIcon from "../img/assets/icons/search.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  banner: {
    color: "white",
    objectFit: "contain",
    height: 448,
  },
  bannerContents: {
    textAlign: "center",
    paddingTop: 100,
    height: 190,
  },
  bannerTitle: {
    fontSize: "2.5rem",
    fontWeight: 800,
    fontFamily: "Montserrat",
  },
  bannerDescription: {
    fontSize: "1.25rem",
    fontWeight: "lighter",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    fontFamily: "Montserrat",
  },
  bannerInbox: {
    backgroundImage: `url(${searchIcon})`,
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "content-box",
    height: 40,
    minWidth: "30%",
    border: "3px solid transparent",
    borderRadius: 50,
    padding: 20,
    fontFamily: "Montserrat",
  },
}));

export default function Banner(props) {
  const classes = useStyles();
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    setInput(event.target.value);
    props.handleInput(event.target.value);
  };

  return (
    <div className={classes.root}>
      <header
        className={classes.banner}
        style={{
          backgroundSize: "cover",
          backgroundImage: "url(" + heroImage + ")",
          backgroundPosition: "center center",
        }}
      >
        <div className={classes.bannerContents}>
          <Typography
            align="center"
            variant="h1"
            className={classes.bannerTitle}
          >
            NEW SONGS DELIVERED EVERY WEEK
          </Typography>
          <Typography
            align="center"
            variant="h2"
            className={classes.bannerDescription}
          >
            Here are the most recent additions to the Song Search App. Start
            playing today!
          </Typography>
          <input
            className={classes.bannerInbox}
            type="text"
            name="input"
            value={input}
            onChange={handleSearch}
            placeholder="Search for songs by artist or title"
          ></input>
        </div>
      </header>
    </div>
  );
}

Banner.propTypes = {
  handleInput: PropTypes.func,
};
