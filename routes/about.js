let express = require('express');
let router = express.Router();

let cDate = new Date();
currentDate = cDate.toLocaleDateString();

router.get('/about', (req, res, next) =>{
  res.render('about', {
     title: 'About',
     date: currentDate    
  });
});


module.exports = router;



//module.exports = function(app) {
//const index = require('../controllers/about.server.controller');
//app.get('/about', index.render);
//};
