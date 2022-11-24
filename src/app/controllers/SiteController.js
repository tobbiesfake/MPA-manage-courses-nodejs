import Course from '../models/Course.js';
import { multipleMongooseToObject } from '../../utility/mongoose.js';
class SiteController {
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                courses = multipleMongooseToObject(courses);
                res.render('home', { courses });
            })
            .catch(next);
    }

    search(req, res) {
        console.dir(req.query);
        res.render('search', req.query);
    }
}

export default new SiteController();
