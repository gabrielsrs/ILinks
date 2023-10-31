import express from "express"

const app = express()
const port = 3000

app.get("/", (req, res) => {
    return res.send("Hello fuck world!!!!!!!!!!!!!!!")
})

app.listen(port, () => {
    console.log("Its running!!")
})