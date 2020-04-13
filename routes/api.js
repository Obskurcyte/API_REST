let express = require('express');
let premier = require('../premiers');
let router = express.Router();
let entier = require('../entier');

router.post('/resultat', function (req, res) {
    if ((entier(req.body.nbr)) && (req.body.nbr > 0)) {
        res.send({
            squareRoot: Math.sqrt(req.body.nbr),
            primes: premier(req.body.nbr)
        })
    } else {
        res.send('Error 400 : le nombre rentré est soit négatif soit non entier')
    }
});




module.exports = router;