const crypto = require('crypto');

const urlDatabase = {};

exports.shortenUrl = (url) => {
    const id = crypto.randomBytes(5).toString('hex');
    urlDatabase[id] = url;
    return id;
};

exports.getUrl = (id) => {
    return urlDatabase[id];
};

