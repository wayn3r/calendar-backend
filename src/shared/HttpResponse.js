
class HttpResponse {
    constructor({ ok, response, errors = undefined }) {
        if (typeof ok !== 'boolean') {
            throw new TypeError('ok must be a boolean');
        }

        this.ok = ok;
        this.response = response;
        this.errors = errors;
    }
}
module.exports = { HttpResponse };