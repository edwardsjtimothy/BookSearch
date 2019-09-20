const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true });

// Define API routes here
let bookSearch = "HarryPotter";
let queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${bookSearch}`;

axios.get(queryUrl).then(
  function(response) {
    let data = response.data.items;
    let title = data[0].volumeInfo.title;
    let author = data[0].volumeInfo.authors;
    let synopsis = data[0].volumeInfo.description;
    let image = data[0].volumeInfo.imageLinks.smallThumbnail;
    let info = data[0].volumeInfo.infoLink;
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
// Send every other request to the React app



// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
