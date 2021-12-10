// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    const rows = await db('projects')
    
   return rows.map((resp) => ({
        ...resp,
        project_completed: !!resp.project_completed
    }))
}

async function createProject(project) {
   return db('projects').insert(project)
    .then(([project_id]) => {
        return db('projects').where('project_id', project_id)
            .first()
            .then((resp) => ({
                ...resp,
                project_completed: !!resp.project_completed
            })) 
    })
}

module.exports = {
    getProjects,
    createProject,
}