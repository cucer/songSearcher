import _ from "lodash";

export const getSong = async () => {
  await fetch("http://localhost:3004/songs")
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};

export const searchSong = async (song) => {
  await fetch(`http://localhost:3004/songs?search_like=${song}`)
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};

export const getFavorites = async () => {
  await fetch("http://localhost:3004/favorites")
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};

export const getLevelFilteredSongs = async (a) => {
  return new Promise(async (resolve, reject) => {
    try {
      const songs = await fetch(
        `http://localhost:3004/songs?level=${a}` // `http://localhost:3004/songs?level=${a}&level=${b}`
      ).then((response) => response.json());

      Promise.all([songs]).then((values) => {
        var merged = _.merge(_.keyBy(values[0], "id"));
        var result = _.values(merged);
        resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });
};

export function getAllData() {
  return new Promise(async (resolve, reject) => {
    try {
      const songs = await fetch(
        "http://localhost:3004/songs"
      ).then((response) => response.json());
      const favorites = await fetch(
        "http://localhost:3004/favorites"
      ).then((response) => response.json());

      Promise.all([songs, favorites]).then((values) => {
        var merged = _.merge(
          _.keyBy(values[0], "id"),
          _.keyBy(values[1], "songId")
        );
        var result = _.values(merged);
        resolve(result);
      });
    } catch (error) {
      reject(error);
    }
  });
}

export const makeID = () => {
  var result = "5";
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < 23; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const postFavorites = async (id) => {
  await fetch("http://localhost:3004/favorites", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      id: makeID(),
      songId: id,
    }),
  })
    .then((response) => response.json())
    .then(
      (result) => {
        console.log("OK", result);
      },
      (error) => {
        console.log("ERROR", error);
      }
    );
};

export const delFavorites = async (id) => {
  await fetch(`http://localhost:3004/favorites?songId=${id}`)
    .then((response) => response.json())
    .then(async (result) => {
      await fetch(`http://localhost:3004/favorites/${result[0].id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(
        (result) => {
          console.log("OK", result);
        },
        (error) => {
          console.log("ERROR", error);
        }
      );
    });
};
