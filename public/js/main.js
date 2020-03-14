console.log("main.js file accessed!!")

const Datastore = require("nedb");
const logindb = new Datastore ("LogIn.db")
logindb.loadDatabase();

logindb.insert({name:"George", Surname:"Beckwith"});