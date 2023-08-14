import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/backend');
// mongoose.connect("mongodb://admin:admin@127.0.0.1:27017/backend?authSource=admin");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => console.log("database connection"));

export default db;
