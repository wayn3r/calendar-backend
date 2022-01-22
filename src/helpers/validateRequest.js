const { validationResult } = require("express-validator");
const { HttpResponse } = require("../shared/HttpResponse");

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @param {import("express").NextFunction} next 
 */
const validateRequest = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res
            .status(400)
            .json(
                new HttpResponse({
                    ok: false,
                    errors: errors.mapped()
                })
            );
    }

    next();
}

module.exports = { validateRequest };