const apiController = {
    index (req, res, next) {
        res.json(res.locals.data.projects)
    },
    show (req, res, next) {
        res.json(res.locals.data.projects)
    }
}



module.experts = apiController