exports.render = (req, res)=> {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

let cDate = new Date();
currentDate = cDate.toLocaleDateString();

    req.session.lastVisit = new Date();

    res.render('about', {
        title: 'About',
        date: currentDate
    });
};