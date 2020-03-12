const Datastore = require ("nedb");

const logindb = new Datastore ("Login.db")
logindb.loadDatabase();