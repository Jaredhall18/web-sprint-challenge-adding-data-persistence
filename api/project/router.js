// build your `/api/projects` router here
const express = require('express');
const Projects = require('./model')

const router = express.Router();

router.get('/', (req, res, next) => {
    Projects.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next)
})

module.exports = router;