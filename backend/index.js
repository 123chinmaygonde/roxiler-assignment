const express = require("express")
const cors = require("cors")
require("dotenv").config()
const ConnectDB = require("./db/Connect")
const apiRoutes = require("./routes/api")
const app = express()
ConnectDB()
app.use(express.json())
app.use(cors())
app.use('/',apiRoutes)
const PORT =  process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})