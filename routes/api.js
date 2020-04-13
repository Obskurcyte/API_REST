let express = require('express');
let premiers = require('../premiers');
let router = express.Router();

router.post('/resultat', function(req, res){
    res.send({
        squareRoot: Math.sqrt(req.body.nbr),
        primes: premiers(req.body.nbr)
})

});


module.exports = router;