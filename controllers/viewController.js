const RESOURCE_PATH = '/project'

const viewController = {
  index (req, res, next) {
    res.render('projects/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('projects/New')
  },
  edit (req, res, next) {
    res.render('projects/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('projects/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const projectId = req.params.id || res.locals.data.project._id
    res.redirect(`${RESOURCE_PATH}/${projectId}`)
  }

}

module.exports = viewController