exports.render = function(req, res) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();
    
let cDate = new Date();
currentDate = cDate.toLocaleDateString();

    res.render('index', {
        title: 'Hello World',
        date: currentDate

    });
};