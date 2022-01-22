/** 
 * @param {Response} res
 */
const renewToken = (_, res) => {
    res.json({
        ok: true,
        location: 'renew'
    })
}

module.exports = { renewToken }