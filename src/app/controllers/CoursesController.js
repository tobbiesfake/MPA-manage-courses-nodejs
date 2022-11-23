import Courses from '../models/Course.js';
import { mongooseToObject } from '../../utility/mongoose.js';
class CoursesController {
    index(req, res, next) {
        Courses.findOne({ slug: req.params.slug })
            .then((course) => {
                mongooseToObject(course);
                res.render('course', course);
            })
            .catch(next);
    }
}

export default new CoursesController();
