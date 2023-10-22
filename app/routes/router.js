import express from "express";

const app = express()

const router = express.Router()

router.get('/', (req, res) => {
  res.json({message: 'Welcome bezkoder application.'})
})


export default app => {
  app.use('/', router)
}