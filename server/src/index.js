require("../../mongooseSetup/mongooseSetup");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");

app.use(express.static(path.resolve(__dirname, "../../client", "public" )));

app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "../../client", "public/index.html" ));
});

app.listen(port, () => {
  console.log(`Server running on - ${port}`);
});



