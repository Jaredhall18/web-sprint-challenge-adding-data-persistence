// build your `/api/resources` router here
const express = require('express');
const Resources = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Resources.getResources()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(next)
})

router.post("/", (req, res, next) => {
    Resources.createResource(req.body)
      .then((resource) => {
        res.status(201).json(resource);
      })
      .catch(next);
  });

module.exports = router;