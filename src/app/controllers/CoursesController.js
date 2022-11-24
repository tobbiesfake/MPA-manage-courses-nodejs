import Course from '../models/Course.js';
import {
    mongooseToObject,
    multipleMongooseToObject,
} from '../../utility/mongoose.js';

class CoursesController {
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                courses = multipleMongooseToObject(courses);
                res.render('./course/all-courses', { courses });
            })
            .catch(next);
    }

    index(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                mongooseToObject(course);
                if (course) {
                    res.render('./course/course', course);
                } else {
                    res.render('page-not-found');
                }
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('./course/newCourse');
    }

    success(req, res, next) {
        new Course({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            slug: req.body.slug,
        })
            .save()
            .then(res.render('./course/success'));
    }
}

export default new CoursesController();
