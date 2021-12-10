// build your `Project` model here
const db = require('../../data/dbConfig')

async function getProjects() {
    const rows = await db('projects')
    
   return rows.map((resp) => ({
        ...resp,
        project_completed: !!resp.project_completed
    }))
}

module.exports = {
    getProjects,
}