import Course from '../models/Course.js';
class SiteController {
    home(req, res) {
        // res.render('home');
        Course.find({}, function (err, courses) {
            if (!err) {
                res.json(courses);
                return;
            }
            res.status(400).json({ err: 'Error message Test' });
        });
    }

    search(req, res) {
        res.send('SEARCH');
    }
}

export default new SiteController();
