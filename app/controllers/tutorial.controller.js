import Tutorial from '../models/tutorial.model'

// Create and Save a new Tutorial
const create = (req, res) => {
  // Validate request
  if(!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!'
    })
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false,
  })

  // Save Tutorial in the database
  Tutorial.create(tutorial, (err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occured while creating the Tutorial.'
      })
    } else {
      res.send(data)
    }
  })
}

// Retrieve all Tutorials from the database (with condition).
const findAll = (req, res) => {
  const title = req.body.title

  Tutorial.getAll(title, (err, res) => {
    if (err) res.status(500).send({
      message: err.message || 'Some error occured while retrieving tutorials.'
    }) 
    else res.send(data)
  })
}

// Find a single Tutorial by Id
const findOne = (req, res) => {
  Tutorial.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        })
      } else {
        res.status(500).send({
          message: `Error retrieving Tutorial with id ${req.params.id}`
        })
      }
    } else res.send(data)
  })
}

// find all published Tutorials
const findAllPublished = (req, res) => {
  Tutorial.getAllPulished((err, data) => {
    if(err) {
      res.status(500).send({
        message: err.message || 'Some error occurured while retrieving tutorials.'
      })
    } else {
      res.send(data)
    }
  })
}

// Update a Tutorial identified by the id in the request
const udpate = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    })
  }

  console.log(req.body)

  Tutorial.updateById(req.params.id, new Tutorial(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}`

        })
      } else {
        res.status(500).send({
          message: `Error updating Tutorial with id ${req.params.id}`
        })
      } 
    } else {
      res.send(data)
    }
  })
}

// Delete a Tutorial with the specified id in the request
const deleteById = (req, res) => {
  if (err) {
    if (err.kind === 'not_found') {
      res.status(404).send({
        message: `Not found Tutorial with id ${req.params.id}.`
      })
    } else {
      res.status(500).send({
        message: `Could not delete Tutorial with id ${req.params.id}`
      })
    }
  } else {
    res.send({message: `Tutorial was deleted successfully!`})
  }
}

// Delete all Tutorials from the database.
const deleteAll = (req, res) => {
  Tutorial.deleteAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || `Some error occurred while removing all tutorials.`
      })
    } else {
      res.send({message: `All Tutorials were deleted successfully!`})
    }
  })
}

export {create, findAll, findOne, findAllPublished, udpate, deleteById, deleteAll }