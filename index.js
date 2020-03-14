const express = require("express");
const app = express();

var port = 3000
app.listen(port, () => console.log("Listening at", port));
app.use(express.static("public"));