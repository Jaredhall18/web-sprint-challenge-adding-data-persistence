// build your `Task` model here
const db = require('../../data/dbConfig')

async function getTasks() {
    const rows = await db('tasks as t').join(
        "projects as p",
        "t.project_id",
        "p.project_id"
    )
    
   return rows.map((row) => ({
        ...row,
        task_completed: !!row.task_completed
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
    getTasks,
    createProject,
}