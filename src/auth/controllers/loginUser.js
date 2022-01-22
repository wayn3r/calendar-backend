const { HttpResponse } = require("../../shared/HttpResponse");

/** 
 * @param {Request} req
 * @param {Response} res
 */
const loginUser = (req, res) => {
    const { email, password } = req.body;
    res.json(new HttpResponse({
        ok: true,
        response: {
            email,
            password,
        }
    }))
}

module.exports = { loginUser }