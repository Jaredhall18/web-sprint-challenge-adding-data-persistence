const projects = [
    {
        project_name: "Test1",
        project_description: "Test Data",
        project_completed: false
    },
    {
        project_name: "Test2",
        project_description: "More Test Data",
        project_completed: true
    },
    {
        project_name: "Test3",
        project_description: "Even More Test Data",
        project_completed: true
    }
]

const resources = [
    {
        resource_name: "Google",
        resource_description: "It's good"
    },
    {
        resource_name: "Bing",
        resource_description: "It's not good"
    },
    {
        resource_name: "Grandpa",
        resource_description: "He's the best"
    }
]

const tasks = [
    {
        task_description: "Help dad",
        task_notes: "Just help",
        task_completed: false,
        project_id: 1,
    },
    {
        task_description: "Code Challenge",
        task_notes: "It is not fun",
        task_completed: false,
        project_id: 2,
    },
    {
        task_description: "Gym",
        task_notes: "Take preworkout before",
        task_completed: true,
        project_id: 3,
    }
]

const project_resources = [
    {
        project_id: 1,
        resource_id: 1,
      },
      {
        project_id: 2,
        resource_id: 2,
      },
      {
        project_id: 3,
        resource_id: 3,
      },
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects)
    await knex('resources').insert(resources)
    await knex('tasks').insert(tasks)
    await knex('project_resources').insert(project_resources)
}