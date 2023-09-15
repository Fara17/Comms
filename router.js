const Router = require('express')
const router = new Router()
const controller = require('./controller')

router.post('/comments', controller.createData)

module.exports = router