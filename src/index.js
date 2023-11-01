import express from "express"
import path from "path"
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import { router } from "./routes.js"

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

const __dirname = fileURLToPath(import.meta.url)
app.set("views", path.join(__dirname, "../views"))

app.use(express.static("src/public"))

app.use(router)

app.listen(port, () => {
    console.log("Its running!!")
})