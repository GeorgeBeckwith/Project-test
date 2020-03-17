//Server for static files
const express = require("express"); //Imports express module
const app = express(); //Stores link to express module in app variable

var port = 3000 //Assigns the value of 3000 to the variable port
app.listen(port, () => {
    console.log("Listening at", port); //When server is started shows which port is being used
});
app.use(express.static("public")); //This gives access to the public file where the static files are stored

//Once received data from the user its stored in the database
const dataStore = require("nedb") //Imports the ability to access the use of a database through nedb
const logInDB = new dataStore("logInDB")
logInDB.loadDatabase();

//Allows for data to be sent from clients when submitting details which will be stored in a separate server
app.use(express.json());
app.post("/data", (request, response) => {
    console.log(request.body); 
    const data = request.body;
    logInDB.insert(data)
    response.end()
});