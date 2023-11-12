import express from "express"
import mongoose from "mongoose";
import path from "path"
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import { router } from "./routes.js"
import { ErrorHandler } from "./middlewares/errorHandler.js";

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = fileURLToPath(import.meta.url)
app.set("views", path.join(__dirname, "../views"))

app.use(express.static("src/public"))

app.set("view engine", "ejs")

mongoose.connect('mongodb://127.0.0.1:27017/ILink')

app.use(router)

const errorHandler = new ErrorHandler()
app.use(errorHandler.handle)

app.listen(port, () => {
    console.log("Its running!!")
})