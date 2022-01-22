const { HttpResponse } = require('../../shared/HttpResponse')
/** 
 * @param {Request} req
 * @param {Response} res
 */
const createUser = (req, res) => {
    const { name, email, password } = req.body;
    res.json(
        new HttpResponse({
            ok: true,
            response: {
                name,
                email,
                password
            }
        })
    )
}

module.exports = { createUser }