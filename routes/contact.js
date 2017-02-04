let express = require('express');
let router = express.Router();

let cDate = new Date();
currentDate = cDate.toLocaleDateString();

router.get('/contact', (req, res, next) =>{
  res.render('contact', {
     title: 'Contact',
     date: currentDate
    });
});

module.exports = router;

/////////////////////////////////////////////////////


//module.exports = function(app) {
//const index = require('../controllers/contact.server.controller');
//app.get('/contact', index.render);
//};
