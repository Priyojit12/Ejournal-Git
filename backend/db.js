const mongoose = require("mongoose");
const mongURI = "mongodb://localhost:27017/ejournaldb?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = () => {
  mongoose.connect(mongURI);
};

module.exports = connectToMongo;
