const { Router } = require('express')
const { body } = require('express-validator')
const { validateRequest } = require('../../helpers/validateRequest')
const { loginUser, renewToken } = require('../controllers')

const router = Router()

router.post('/', [
    body('email')
        .not().isEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email is invalid'),
    body('password')
        .not().isEmpty().withMessage('Password is required'),
    validateRequest
], loginUser)

router.get('/renew', renewToken)

module.exports = router