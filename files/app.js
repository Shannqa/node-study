const express = require("express");
const app = express();
const port = 3000;


app.use("assets", express.static("public"));


app.get("/", (request, response) => {
  response.send("Hello world")
});

app.post("/contact-me", (request, response) => {
  response.send("Post req")
});

app.listen(port, () => {
  console.log("Listening on port " + port);
})

