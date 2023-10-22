import express from "express";
import cors from 'cors'

import appRouter from './app/routes/router.js'

const app = express()

const corsOptions = {
  origin: 'http://localhost:8081'
}

// config CORS to ensure that your Express server is secure and only allows trusted origins to make requests.
// app.use method is used to apply CORS middleware to your Express applciation.
app.use(cors(corsOptions))

// parse request of content-type - application/json
app.use(express.json())

//simple route
// app.get('/', (req, res) => {
//   res.json({message: 'Welcome t bezkoder application.'})
// })
appRouter(app)

// set port, listen for requests
const PORT = process.env.PORT | 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})