import Course from '../models/Course.js';
class SiteController {
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                courses = courses.map((course) => course.toObject());
                res.render('home', { courses });
            })
            .catch(next);
    }

    search(req, res) {
        res.send('SEARCH');
    }
}

export default new SiteController();
