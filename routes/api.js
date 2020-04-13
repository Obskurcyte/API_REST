let express = require('express');
let premiers = require('../premiers');
let router = express.Router();

router.post('/resultat', function(req, res){
    if ((nbr.isInteger()) && (nbr > 0)){
        res.send({
            squareRoot: Math.sqrt(req.body.nbr),
            primes: premiers(req.body.nbr)
    })} else {
        res.send('Error 400')
        }
});




module.exports = router;