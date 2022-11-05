require('dotenv').config()

const db = require('./db')
const Project = require('./project')

const starterProject = [
  { } ]

  Project.deleteMany({})
.then(() => { 
    Project.create(starterProject)
    .then((createdProjects) => {
        console.log('uploaded pets:', createdProjects)
        db.close()

    })
    .catch(err => {
        console.log(err)
        db.close()
    })
}).catch(err => {
    console.log(err)
    db.close()
})
