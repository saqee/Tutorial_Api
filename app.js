import express from "express"
import cors from "cors"
import db from "./models/index.js"
import tutorialRoutes from "./routes/tutorial.js"
const app = express()

app.use(cors())
app.use(express.json())
db.sequelize
  .sync()
  .then(() => {
    console.log("sobta tik ache")
  })
  .catch(() => {
    console.log("shanti nai re shanti naii")
  })

app.use("/", tutorialRoutes)
app.listen(5001, () => {
  console.log("server")
})
