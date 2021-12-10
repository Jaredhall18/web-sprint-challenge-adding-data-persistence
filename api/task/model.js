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

async function createTask(task) {
   return db('tasks').insert(task)
    .then(([task_id]) => {
        return db('tasks').where('task_id', task_id)
            .first()
            .then((resp) => ({
                ...resp,
                task_completed: !!resp.task_completed
            })) 
    })
}

module.exports = {
    getTasks,
    createTask,
}