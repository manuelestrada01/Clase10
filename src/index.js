import express from "express"
import WordsRoutes from "./routes/words.route.js"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", new WordsRoutes().start())

//app.use("/", (req, res) => {
    //res.send("Servidor en linea")
//})

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
app.on("ERROR", (err) => console.error(err))