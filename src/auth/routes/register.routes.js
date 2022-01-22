const { Router } = require('express')
const { body } = require('express-validator')
const { validateRequest } = require('../../helpers/validateRequest')
const { createUser } = require('../controllers')

const router = Router()

router.post('/register', [
    body('name')
        .not().isEmpty().withMessage('Name is required')
        .isLength({ min: 3, }).withMessage('Name must be at least 3 characters long'),
    body('email')
        .not().isEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email is invalid'),
    body('password')
        .not().isEmpty().withMessage('Password is required')
        .isLength({ min: 6, }).withMessage('Password must be at least 6 characters long'),
    validateRequest
], createUser)

module.exports = router