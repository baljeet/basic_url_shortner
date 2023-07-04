const service = require('./service');

exports.shortenUrl = (req, res) => {
    const url = req.body.url;
    const id = service.shortenUrl(url);
    res.send({ id });
};

exports.redirectUrl = (req, res) => {
    const url = service.getUrl(req.params.id);
    if (url) {
        res.redirect(url);
    } else {
        res.sendStatus(404);
    }
};

