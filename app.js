let express = require('express');
let bodyParser = require('body-parser');


let app = express();

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.listen(4000, function(){
});

