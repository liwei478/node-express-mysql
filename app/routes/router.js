import express from "express";
import tutorials from "../controllers/tutorial.controller";

const app = express()

const router = express.Router()

// Create a new Tutorial
router.post('/', tutorials.create)

// Retrieve all Tutorials
router.get('/', tutorials.findAll)

// Retrieve all published Tutorials
router.get('/published', tutorials.findAllPulished)

// Retrieve a single Tutorial with id
router.get('/:id', tutorials.findOne)

// Update a Tutorial with id
router.put('/:id', tutorials.update)

// Delete a Tutorial with id
router.delete('/:id', tutorials.deleteById)

// Delete all Tutorials
router.delete('/:id', tutorials.deleteAll)


export default app => {
  app.use('/api/tutorials', router)
}