const { Router } = require('express')
const loginRouter = require('./login.routes')
const registerRouter = require('./register.routes')


const router = Router()

router.use(loginRouter)
router.use(registerRouter)

module.exports = router
