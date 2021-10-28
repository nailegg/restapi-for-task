const router = require('express').Router();
const Task = require('../models/task');

// Find All
router.get('/', (req, res) => {
  Task.findAll()
    .then((tasks) => {
      if (!tasks.length) return res.status(404).send({ err: 'Task not found' });

      res.json(tasks);
    })
    .catch(err => res.status(500).send(err));
});
/*router.get("/", (req, res) => {
    res.send(Task);
});*/


// Find One by todoid
router.get('/id/:id', (req, res) => {
  Task.findOneByTaskid(req.params.id)
    .then((task) => {
      if (!task) return res.status(404).send({ err: 'Task not found' });
      res.json(`${task}`);
    })
    .catch(err => res.status(500).send(err));
});

// Create new todo document
router.post('/', (req, res) => {
  Task.create(req.body)
    .then(task => res.send(task))
    .catch(err => res.status(500).send(err));
});

// Update by todoid
router.put('/id/:id', (req, res) => {
  Task.updateByTaskid(req.params.id, req.body)
    .then(task => res.send(task))
    .catch(err => res.status(500).send(err));
});

// Delete by todoid
router.delete('/id/:id', (req, res) => {
  Task.deleteByTaskid(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

module.exports = router;