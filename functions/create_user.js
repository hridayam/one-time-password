const admin = require('firebase-admin');

module.exports = function(req, res) {
    // check for valid input
    if (!req.body.phone) {
        res.status(422).send({
            error: 'Bad Input'
        })
    }
    
    const phone = String(req.body.phone).replace(/[^\d]/g, "");

    admin.auth().createUser({ uid: phone })
        .then(user => res.send(user))
        .catch(err => res.status(422).send({ error: err })
    );
};