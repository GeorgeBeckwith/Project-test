//Server fot static files
const express = require("express");
const app = express();

var port = 3000
app.listen(port, () => console.log("Listening at", port));
app.use(express.static("public"));
app.use(express.json());

//Allows for data to be sent from clients when submitting details which will be stored in separate server
app.post("/data", (request, response) => {
    console.log(request.body);
});