let express = require('express');
let router = express.Router();
  
let cDate = new Date();
currentDate = cDate.toLocaleDateString();
/* GET home page. */
router.get('/', (req, res, next) =>{
 res.render('index', {
     title: 'Express',
     date: currentDate    
  });
});

router.get('/about', (req, res, next) =>{
  res.render('about', {
     title: 'About',
     date: currentDate    
  });
});

router.get('/contact', (req, res, next) =>{
  res.render('contact', {
     title: 'Contact',
     date: currentDate
    });
});


module.exports = router;

//module.exports = function(app) {
//const index = require('../controllers/index.server.controller');
//app.get('/index', index.render);
//};
