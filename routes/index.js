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

router.get('/yo', (req, res, next) =>{
  res.render('index', {
     title: 'yo',
     date: currentDate
    });
});

module.exports = router;
